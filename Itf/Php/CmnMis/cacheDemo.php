<?php
require_once('IncludeFiles.php');

echo Str::RegexMatch("/\\s+from\\s+\\S+(?=\\s+|,)/","select name from table");