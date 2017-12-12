Getting Started
===============

XenServer includes a XML-RPC based API providing programmatic
access to the extensive set of XenServer management features and
tools. The XenServer API can be called from a remote system as well
as local to the XenServer host. Although it is possible to write
applications which use the XenServer Management API directly
through raw XML-RPC calls, the task of developing third-party
applications is greatly simplified through the use of a language binding
which exposes the individual API calls as first-class functions in the
target language. The XenServer SDK provides language bindings and
example code for the C, C\#, Java, Python and PowerShell programming
languages.

System Requirements and Preparation
-----------------------------------

The first step towards working with the SDK is to install
XenServer. A free version, , is available for
download at <http://www.citrix.com/downloads/xenserver/>. Please refer
to the XenServer Installation Guide for detailed instructions on
how to set up your development host. When the installation is complete,
please note the *host IP address* and the *host password*.

Downloading
-----------

The SDK is packaged as a ZIP file and is available as a free download
from <http://www.citrix.com/downloads/xenserver/>.

SDK Languages 
-------------

The extracted contents of the SDK ZIP file are in the `XenServer-SDK`
directory. The following is an overview of its structure. Where
necessary, subdirectories have their own individual README files. It
should be noted that the examples provided are not the same across all
the language bindings, so, if you intend to use one binding, it is
advisable to also browse the sample code available in the others.

At the top level of the XenServer-SDK directory the XenServer API
Reference document has been included, which provides a more detailed
description of the API semantics as well as describing the format of
XML/RPC messages on the wire.

### C

The XenServer-SDK directory contains the following folders that are
relevant to C programmers:

-   `libxenserver`

    The XenServer SDK for C.

    -   `libxenserver/bin`

        The libxenserver compiled binaries.

    -   `libxenserver/src`

        The libxenserver source code and examples and a Makefile to build
        them. Every API object is associated with a header file which
        contains declarations for all that object's API functions; for
        example, the type definitions and functions required to invoke
        VM operations are all contained in `xen_vm.h`.

#### C binding dependencies


**Platform  supported**:

+  Linux 
+  Windows (under cygwin)           

**Library**:

The language binding is generated as a `libxenserver.so` that is linked by C programs. 

**Dependencies**:

 -   XML library (libxml2.so on GNU Linux)        
 -   Curl library (libcurl3.so)                 


**Examples**:
The following simple examples are included with the C bindings:

-   `test_vm_async_migrate`: demonstrates how to use asynchronous API
    calls to migrate running VMs from a slave host to the pool master.

-   `test_vm_ops`: demonstrates how to query the capabilities of a host,
    create a VM, attach a fresh blank disk image to the VM and then
    perform various powercycle operations;

-   `test_failures`: demonstrates how to translate error strings into
    enum\_xen\_api\_failure, and vice versa;

-   `test_event_handling`: demonstrates how to listen for events on a
    connection.

-   `test_enumerate`: demonstrates how to enumerate the various API
    objects.

-   `test_get_records`: demonstrates how to obtain information on API
    objects such as hosts, VMs, and storage repositories.

### C &#35;

The XenServer-SDK directory contains the following folders that are
relevant to C\# programmers:

-   `XenServer.NET`

    The XenServer SDK for C\#.NET.

    -   `XenServer.NET/bin`

        XenServer.NET ready compiled binaries.

    -   `XenServer.NET/samples`

        XenServer.NET examples shipped as a Microsoft Visual studio
        solution.

    -   `XenServer.NET/src`

        XenServer.NET source code shipped as a Microsoft Visual Studio
        project. Every API object is associated with one C\# file; for
        example the functions implementing the VM operations are
        contained within the file `VM.cs`.

#### C\# binding dependencies


**Platform supported**:
+  Windows with .NET version 4.5                                              


**Library**:  
+  The language binding is generated as a Dynamic Link Library `XenServer.dll` that can be referenced by C\# programs.

**Dependencies**: 
+  `CookComputing.XMLRpcV2.dll` is needed for the XenServer.dll to be able to  communicate with the xml-rpc server. We ship a patched 2.5 version and  recommend that you use this one, though others may work.  

**Examples**:

Three examples are included with the C\# bindings in the directory
`XenServer-SDK/XenServer.NET/samples` as separate projects of the
`XenSdkSample.sln` solution:

-   `GetVariousRecords`: logs into a XenServer Host and displays
    information about hosts, storage and virtual machines;

-   `GetVmRecords`: logs into a XenServer Host and lists all the VM
    records;

-   `VmPowerStates`: logs into a XenServer Host, finds a VM and
    takes it through the various power states. Requires a shut-down VM
    to be already installed.

### Java

The XenServer-SDK directory contains the following folders that are relevant to Java programmers:

-   `XenServerJava`

    The XenServer SDK for Java

    -   `XenServerJava/bin`

        Java compiled binaries.

    -   `XenServerJava/javadoc`

        Java documentation.

    -   `XenServerJava/samples`

        Java examples.

    -   `XenServerJava/src`

        Java source code and a Makefile to build the code and the
        examples. Every API object is associated with one Java file; for
        example the functions implementing the VM operations are
        contained within the file `VM.java`.

#### Java binding dependencies

**Platform supported**:
+  Linux
+  Windows

**Library**:
+  The language binding is generated as a Java Archive file `xenserver-7.1.jar` that is linked by Java programs.

**Dependencies**:
+  `xmlrpc-client-3.1.jar`
+  `xmlrpc-common-3.1.jar`
+  `ws-commons-util-1.0.2.jar`
 
These jars are needed for the `xenserver.jar` to be able to communicate with the xml-rpc server. These jars are shipped alongside the `xenserver.jar`.
  
**Examples**:

Running the main file `XenServer-SDK/XenServerJava/samples/RunTests.java` will run a series of examples included in the same directory:

-   `AddNetwork`: Adds a new internal network not attached to any NICs;

-   `SessionReuse`: Demonstrates how a Session object can be shared
    between multiple Connections;

-   `AsyncVMCreate`: Makes asynchronously a new VM from a built-in
    template, starts and stops it;

-   `VdiAndSrOps`: Performs various SR and VDI tests, including creating
    a dummy SR;

-   `CreateVM`: Creates a VM on the default SR with a network and DVD
    drive;

-   `DeprecatedMethod`: Tests a warning is displayed when a deprecated
    API method is called;

-   `GetAllRecordsOfAllTypes`: Retrieves all the records for all types
    of objects;

-   `SharedStorage`: Creates a shared NFS SR;

-   `StartAllVMs`: Connects to a host and tries to start each VM on it.

### PowerShell

The XenServer-SDK directory contains the following folders that are
relevant to PowerShell users:

-   `XenServerPowerShell`

    The XenServer SDK for PowerShell.

    -   `XenServerPowerShell/XenServerPSModule`

        The XenServer PowerShell module.

    -   `XenServerPowerShell/samples`

        PowerShell example scripts.

    -   `XenServerPowerShell/src`

        C\# source code for the XenServer PowerShell cmdlets.

Detailed installation instructions are provided within the README file
accompanying the module. Once the module is installed, an overview of
the cmdlets can be obtained by typing:

    PS> Get-Help about_XenServer

#### PowerShell binding dependencies

**Platform supported**:
+  Windows with .NET Framework 4.5 and PowerShell v4.0

**Library**:
+  `XenServerPSModule`

**Dependencies**:
+  `CookComputing.XMLRpcV2.dll` 

This library is needed to be able to communicate with the xml-rpc server. We ship a patched 2.5 version and recommend that you use this one, though others may work.
  
**Examples**:

The following example scripts are included with the PowerShell bindings
in the directory `XenServer-SDK/XenServerPowerShell/samples`:

-   `AutomatedTestCore.ps1`: demonstrates how to log into a
    XenServer host, create a storage repository and a VM, and then
    perform various powercycle operations.

-   `HttpTest.ps1`: demonstrates how to log into a XenServer host,
    create a VM, and then perform operations such as VM importing and
    exporting, patch upload, and retrieval of performance statistics.

### Python

The XenServer-SDK directory contains the following folders that are
relevant to Python developers:

-   `XenServerPython`

    This directory contains the XenServer Python module
    *XenAPI.py*.

    -   `XenServerPython/samples`

        XenServer API examples using Python.

#### Python binding dependencies

**Platform supported**:
+ Linux
  
**Library**:
+ XenAPI.py
  
**Dependencies**:
+ None
  
**Examples**:

The SDK includes 7 Python examples:

-   `fixpbds.py` - reconfigures the settings used to access shared
    storage;

-   `install.py` - installs a Debian VM, connects it to a network,
    starts it up and waits for it to report its IP address;

-   `license.py` - uploads a fresh license to a XenServer Host;

-   `permute.py` - selects a set of VMs and uses XenMotion to move them
    simultaneously between hosts;

-   `powercycle.py` - selects a set of VMs and powercycles them;

-   `vm_start_async.py` - demonstrates how to invoke operations
    asynchronously;

-   `watch-all-events.py` - registers for all events and prints details
    when they occur.

Command Line Interface (CLI) 
----------------------------

Besides using raw XML-RPC or one of the supplied language bindings,
third-party software developers may integrate with XenServer Hosts
by using the XE command line interface `xe`. The xe CLI is installed by
default on XenServer hosts; a stand-alone remote CLI is also
available for Linux. On Windows, the `xe.exe` CLI executable is
installed along with XenCenter.

#### CLI dependencies


**Platform supported**:
+ Linux
+ Windows

**Library**:
+ None

**Binary**:
+ xe on Linux
+ xe.exe on Windows

**Dependencies**:
+ None


The CLI allows almost every API call to be directly invoked from a
script or other program, silently taking care of the required session
management. The xe CLI syntax and capabilities are described in detail
in the XenServer Administrator's Guide. For additional resources
and examples, visit the [Citrix Knowledge Center](http://support.citrix.com).

> **Note**
>
> When running the CLI from a XenServer Host console,
> tab-completion of both command names and arguments is available.