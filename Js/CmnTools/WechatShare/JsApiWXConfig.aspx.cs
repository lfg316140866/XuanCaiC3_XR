using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using WeChatCmn.Api;
using WeChatCmn.Api.Utility;

public partial class JsApiWXConfig : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        CgiBin _cgiBin = new CgiBin(Cmn.WebConfig.getApp("app_key"), Cmn.WebConfig.getApp("app_secret"), APIConfig.OnlyOne);
        string _url = Cmn.Request.Get("Url");
        bool _isDebug = false;
        string _debug = Cmn.Request.Get("Debug");
        if (_debug == "1") {
            _isDebug = true;
        }
        string _xx = _cgiBin.GetJsApiWXConfig(APIConfig.OnlyOne, _url, _isDebug);
        Cmn.Log.WriteToFile("aa", "aa=" + _xx);
        Response.Write(_xx);
    }
}