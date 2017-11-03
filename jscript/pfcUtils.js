/*
   HISTORY

14-NOV-02   J-03-38   $$1   JCN      Submitted.
07-MAR-03   K-01-03   $$2   JCN      UNIX support
01-MAY-07   L-01-31   $$3   JCN      New exception messaging.
19-Feb-14   P-20-48   $$4 gshmelev   used pfcIsMozilla
 */

function isProEEmbeddedBrowser ()
{
  if (top.external && top.external.ptc)
    return true;
  else
    return false;
}

function pfcIsWindows ()
{
  if (navigator.appVersion.indexOf ("ProE") != -1)
    return true;
  else
    return false;
}

function pfcIsMozilla ()
{
  if (navigator.appName.indexOf ("Mozilla") != -1)
    return true;
  else
    return false;
}

function pfcCreate(className)
{
  if (pfcIsMozilla())
    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  //alert("className:" + className);
  //return new ActiveXObject ("pfc."+className);
  if (pfcIsWindows()) {	
	  return new ActiveXObject ("pfc."+className);	  
  } else {	  
      ret = Components.classes ["@ptc.com/pfc/" + className + ";1"].      
      createInstance();
      return ret;
    }
}

function pfcGetProESession ()
{
  if (!isProEEmbeddedBrowser ())
    {
      throw new Error ("Not in embedded browser.  Aborting...");
    }
  
  // Security code
  if (pfcIsMozilla())
    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  
  var glob = pfcCreate ("MpfcCOMGlobal");
  return glob.GetProESession();
}

function pfcGetScript() {  
  if (!isProEEmbeddedBrowser ()) {
      throw new Error ("Not in embedded browser.  Aborting...");
    }
  
  // Security code
  if (pfcIsMozilla())
    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  
  var glob = pfcCreate("MpfcCOMGlobal");
  return glob.GetScript();
}


function pfcGetExceptionDescription (err)
{
 if (pfcIsWindows())
    errString = err.description;
 else
      errString = err.message;

 return errString;
}

function pfcGetExceptionType (err)
{
  errString = pfcGetExceptionDescription (err);

  // This should remove the XPCOM prefix ("XPCR_C")
  if (errString.search ("XPCR_C") < 0)
  {
	errString = errString.replace ("Exceptions::", "");
	semicolonIndex = errString.search (";");
	if (semicolonIndex > 0)
		errString = errString.substring (0, semicolonIndex);
	return (errString);
  }
  else
      return (errString.replace("XPCR_C", ""));
}

      
