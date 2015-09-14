using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ItfProxy : System.Web.UI.Page
{
    protected string _CsvContent = "";
    //---------------------------------------------------------
    protected void Page_Load(object sender, EventArgs e)
    {
        string _targetUrl = Cmn.Request.Get("TargetUrl").Trim();
        string _retVal = "";

        if (_targetUrl == "") { Response.Write("找不到参数TargetUrl"); return; }

        if (Cmn.Request.Get("method") == "GetCSV") {
            string _url = Cmn.Func.DelParamFromUrl(_targetUrl, "PageSize");
            _url = Cmn.Func.DelParamFromUrl(_url, "CurPage");
            _url = Cmn.Func.AddParamToUrl(_url, "PageSize=4500");
            _url = Cmn.Func.AddParamToUrl(_url, "CurPage=");

            _retVal = ConactCsvData(_url, 1);

            
            string _filePath = "~/temp/" + Cmn.Rand.GetGuid() + ".csv";

            string _ret = "";

            try {
                DataTable _dt = JsonConvert.DeserializeObject<DataTable>(_retVal);//_jsonData.Property("data").Value.ToString()

                _ret = Cmn.Cls.Csv.SaveToFile(Server.MapPath(_filePath), _dt);
            }
            catch (Exception ex) {
                Response.Clear();
                Response.Write("Exception<br />" + ex.Message);
                Response.End();
                return;
            }

            Response.Clear();
            ResponseFile(Server.MapPath(_filePath));
            Response.End();

            return;
        }

        _retVal = GetWebClientData(_targetUrl);

        Response.Clear();
        Response.Write(_retVal);
        Response.End();
    }
    //---------------------------------------------------------
    private string GetWebClientData(string targetUrl)
    {
        //Cmn.Log.WriteToFile("targetUrl", targetUrl);
        string _retVal = "";
        WebClient _webClient = new WebClient();

        //增加SessionID,为了解决当前用户登录问题
       // Cmn.Session.SetUserID("kdkkk"); //随便设置一个session 否则SessionID会变
        Cmn.Session.Set("cmn_ItfProxy_tmp","test");

        targetUrl = Cmn.Func.AddParamToUrl(targetUrl, "CurSessionID=" + Session.SessionID);

        Cmn.Log.WriteToFile("targetUrl", targetUrl);

        if (Request.Form.Count > 0) { //post方式
            string _postString = "";

            for (int _i = 0; _i < Request.Form.Count; _i++) {
                if (_postString != "") { _postString += "&"; }

                _postString += Request.Form.Keys[_i] + "=" + System.Web.HttpUtility.UrlEncode(Request.Form[_i].ToString(), Encoding.UTF8);
            }


            byte[] _postData = Encoding.GetEncoding("utf-8").GetBytes(_postString);
            _webClient.Headers.Add("Content-Type", "application/x-www-form-urlencoded");

            byte[] _responseData = _webClient.UploadData(targetUrl, "POST", _postData);//得到返回字符流  
            _retVal = Encoding.GetEncoding("utf-8").GetString(_responseData);//解码  
        }
        else {
            Stream _stream = _webClient.OpenRead(targetUrl);

            StreamReader _rd = new StreamReader(_stream, Encoding.GetEncoding("utf-8"));
            _retVal = _rd.ReadToEnd();

            _stream.Close();

        }

        return _retVal;
    }
    //---------------------------------------------------------
    int _Count = 0;
    private string ConactCsvData(string url, int currentPage) {
        _Count++;
        if (_Count > 100) { return "[" + _CsvContent + "]"; }

        url = Cmn.Func.DelParamFromUrl(url, "PageSize");
        url = Cmn.Func.DelParamFromUrl(url, "CurPage");

        url = Cmn.Func.AddParamToUrl(url, "PageSize=4500");
        url = Cmn.Func.AddParamToUrl(url, "CurPage=" + currentPage);

        string _retVal = GetWebClientData(url);
       
        JObject _jsonData = (JObject)JsonConvert.DeserializeObject(_retVal);

        if (_jsonData.Property("data").Value.ToString().Trim() != "") {
            _CsvContent += _jsonData.Property("data").Value.ToString().Replace("[", "").Replace("]", "");
            ConactCsvData(url, Convert.ToInt32(_jsonData.Property("RecCount").Value.ToString()) + 1);
        }

        return "[" + _CsvContent + "]";
    }

    //---------------------------------------------------------
    protected void ResponseFile(string path) {
        System.IO.Stream _iStream = null;
        byte[] _buffer = new Byte[10000];
        int _length;
        long _dataToRead;
        string _filename = System.IO.Path.GetFileName(path);
        try {
            _iStream = new System.IO.FileStream(path, System.IO.FileMode.Open, System.IO.FileAccess.Read, System.IO.FileShare.Read);
            _dataToRead = _iStream.Length;
            Response.ContentType = "application/octet-stream";
            //Response.AddHeader("Content-Disposition", "attachment; _filename=" + HttpUtility.UrlEncode(_filename, System.Text.Encoding.UTF8));
            Response.AddHeader("Content-Disposition", "attachment;   filename=" + HttpUtility.UrlEncode(path, System.Text.Encoding.UTF8));
            while (_dataToRead > 0) {
                if (Response.IsClientConnected) {
                    _length = _iStream.Read(_buffer, 0, 10000);
                    Response.OutputStream.Write(_buffer, 0, _length);
                    Response.Flush();
                    _buffer = new Byte[10000];
                    _dataToRead = _dataToRead - _length;
                }
                else {
                    _dataToRead = -1;
                }
            }
        }
        catch (Exception _ex) {
            Response.Write("文件下载时出现错误!");
        }
        finally {
            if (_iStream != null) {
                _iStream.Close();
            }
        }
    }
    //---------------------------------------------------------
}