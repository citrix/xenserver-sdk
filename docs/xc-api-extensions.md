XenCenter API Extensions 
=============================

The following section details the assumptions and API extensions that we
have made, over and above the documented API. Extensions are encoded as
particular key-value pairs in dictionaries such as `VM.other_config`.

Pool 
----

|  Key                                  | Semantics                                                                        |
|---------------------------------------| ---------------------------------------------------------------------------------|
|  pool.name\_label                     | An empty name\_label indicates that the pool should be hidden on the tree view.  |
|  pool.rolling\_upgrade\_in\_progress  | Present if the pool is in the middle of a rolling upgrade.                       |

Host 
----


| Key                                          | Semantics                                                                              |
|----------------------------------------------|----------------------------------------------------------------------------------------|
| host.other\_config\["iscsi\_iqn"\]           | The host's iSCSI IQN.                                                                  |
| host.license\_params\["expiry"\]             | The expiry date of the host's license, in ISO 8601, UTC.                               |
| host.license\_params\["sku\_type"\]          | The host license type i.e. Server or Enterprise.                                       |
| host.license\_params\["restrict\_pooling"\]  | Returns `true` if pooling is restricted by the host.                                   |
| host.license\_params\["restrict\_connection"\] | The number of connections that can be made from XenCenter is restricted.   |
| host.license\_params\["restrict\_qos"\]      | Returns `true` if Quality of Service settings are enabled on the host.                 |
| host.license\_params\["restrict\_vlan"\]     | Returns `true` if creation of virtual networks is restricted on the host.              |
| host.license\_params\["restrict\_pool\_attached\_storage"\] | Returns `true` if the creation of shared storage is restricted on this host. |
| host.software\_version\["product\_version"\] | Returns the host's product version.                                                    |
| host.software\_version\["build\_number"\]    | Returns the host's build number.                                                       |
| host.software\_version\["xapi"\]             | Returns the host's api revision number.                                                |
| host.software\_version\["package-linux"\]    | Returns "installed" if the Linux pack has been installed.                              |
| host.software\_version\["oem\_build\_number"\] | If the host is the OEM version, return its revision number.                          |
| host.logging\["syslog\_destination"\]        | Gets or sets the destination for the XenServer system logger (null for local logging). |
| host.logging\["multipathing"\]               | "true" if storage multipathing is enabled on this host.                                |
| host.logging\["boot\_time"\]                 | A floating point Unix time giving the time that the host booted.                       |
| host.logging\["agent\_start\_time"\]         | A floating point Unix time giving the time that the control domain management daemon started. 


VM
--


| Key                                         | Semantics                                                                                      |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| VM.other\_config\["default\_template"\]     | This template is one that was installed by . This is used to  selectively hide these in the tree view, to use a different icon for them, and to disallow deletion. |
| VM.other\_config\["xensource\_internal"\]   | This template is special, such as the P2V server template. These are completely hidden by the UI. |
| VM.other\_config\["install\_distro"\] == "rhlike" | This template is for RHEL 5, or CentOS equivalents. This is used to prompt for the Install Repository during install, including       support for install from ISO / CD, and to modify NFS URLs to suit these installers.               |
| VM.other\_config\["install-repository"\] == "cdrom" | Requests an install from a repository in the VM's attached CD drive, rather than a URL.|
| VM.other\_config\["auto\_poweron"\]         | Gets or sets whether the VM starts when the server boots, "true" or "false".                   |
| VM.other\_config\["ignore\_excessive\_vcpus"\] | Gets or sets to ignore XenCenter warning if a VM has more VCPUs than its host has physical CPUs, `true` to ignore. |
| VM.other\_config\["HideFromXenCenter"\]     | Gets or sets whether  XenCenter will show the VM in the treeview, "true" to hide.    |
| VM.other\_config\["import\_task"\]          | Gets the import task that created this VM.                                                     |
| VM.HVM\_boot\_params\["order"\]             | Gets or sets the VM's boot order on HVM VM's only, e.g. "CDN" will boot in the following order - First boot disk,  CD drive, Network. |
| VM.VCPU\_params\["weight"\]                 | Gets or sets the IONice value for the VM's VCPUs, ranges from 1 to 65536, 65536 being the highest.  |
| VM.pool\_migrate(..., options\['live'\])    | `true` indicates live migration. XenCenter always uses this.                         |
| VM.other\_config\["install-methods"\]       | A comma-separated list of install methods available for this template. Can include "cdrom", "nfs", "http" or "ftp".          |
| VM.other\_config\["last\_shutdown\_time"\]  | The time that this VM was last shut down or rebooted, formatted as a UTC ISO8601 datetime.     |
| VM.other\_config\["p2v\_source\_machine"\]  | The source machine, if this VM was imported by a P2V process.                                  |
| VM.other\_config\["p2v\_import\_date"\]     | The date the VM was imported, if it was imported by a P2V process. Formatted as a UTC ISO8601 datetime.     |


SR 
--

|  Key                              | Semantics                                                                                           |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
|  SR.other\_config\["auto-scan"\]  | The SR will be automatically scanned for changes. Set on all SRs created by XenCenter.    |
|  SR.sm\_config\["type"\]          | Set as type `cd` for SRs which are physical CD drives.                                              |


VDI
---

|  Key                           | Semantics                                                                                                                                     |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
|  VDI.type                      | `user` instead of `system` is used to mean "do or do not allow deletion of the VDI through the GUI, if this disk is attached to a VM". The intention here is to prevent you from corrupting a VM (you should uninstall it instead). `suspend` and `crashdump` record suspend and core dumps respectively. `ephemeral` is currently unused. |
|  VDI.managed                   | All unmanaged VDIs are completely hidden in the UI. These are branch points in VHD chains, or unused LUN-per-VDI disks.                       |
|  VDI.sm\_config\["vmhint"\]    | The UUID of the VM that this VDI supports. This is set when VDIs are created through the user interface, to improve performance for certain storage backends. |


VBD 
---

|  Key                              |  Semantics                                                                                                   |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------|
| VBD.other\_config\["is\_owner"\]  | If set, then this disk may be deleted when the VM is uninstalled.                                            |
| VBD.other\_config\["class"\]      | Set to an integer, corresponding to the Best Effort setting of `ionice`.                                     |


Network 
-------

|  Key                                        | Semantics                                                                |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
|  network.other\_config\["automatic"\]       | The New VM wizard will create a VIF connected to this network by default, if this key has any value other than `false`. |
|  network.other\_config\["import\_task"\]    | Gets the import task that created this network.                                                                         |


VM\_guest\_metrics 
------------------

|  Key                              | Semantics                                                         |
|-----------------------------------|-------------------------------------------------------------------|
|  PV\_drivers\_version\["major"\]  | Gets the major version of the VM's PV drivers' version.           |
|  PV\_drivers\_version\["minor"\]  | Gets the minor version of the VM's PV drivers' version.           |
|  PV\_drivers\_version\["micro"\]  | Gets the micro (build number) of the VM's PV drivers' version.    |


Task
----

|  Key                                                   |     Semantics                                                              |
|--------------------------------------------------------|----------------------------------------------------------------------------|
| task.other\_config\["object\_creation"\] == "complete" |  For the task associated with a VM import, this flag will be set when all the objects (VMs, networks) have been created. This is useful in the import VM wizard for us to then go and re-map all the networks that need it.     |