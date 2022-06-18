
# DSPACE 6.3 WATERMARK AND SECURITY FEATURES

This branch includes modifications to dspace such as
1. Add a watermark step to the submission step in XMLUI to allow watermarking uploaded PDFs
2. Add security features such as prevent printing, copy-pasting and other additional features to the PDF bitstreams
3. Add a PDF viewer to the item-view.xsl page with no options for download, print or presentation mode
4. Force users to login again (even when they are already logged in) for specified dspace objects defined in local.cfg


The DSpace code, together with the watermark customization for dspace 6.3 is deployed and can be cloned from github using the following command

````
git clone -b otuoma/add-watermark https://github.com/otuoma/DSpace.git
````
## Files Added
The following new classes have been added. You don't need to change anything in these two files

### 1. WatermarkStep.java | [See here ](https://github.com/otuoma/DSpace/blob/4b94e98f0ac1fb82264905f9f3feb2dc2e5a6e8e/dspace-api/src/main/java/org/dspace/submit/step/WatermarkStep.java)

````
dspace-api/src/main/java/org/dspace/submit/step/WatermarkStep.java
````

### 2. WatermarkStep.java | [See here](https://github.com/otuoma/DSpace/blob/otuoma/add-watermark/dspace-xmlui/src/main/java/org/dspace/app/xmlui/aspect/submission/submit/WatermarkStep.java)
````
dspace-xmlui/src/main/java/org/dspace/app/xmlui/aspect/submission/submit/WatermarkStep.java
````
### 3. bitstream-switch.js [See here](https://github.com/otuoma/DSpace/blob/otuoma/add-watermark/dspace-xmlui-mirage2/src/main/webapp/scripts/bitstream-switch.js) 
This is a one-line file containing one javascript function for switching which bitstream to be displayed.
This is done on the item-view.xsl page responsible for displaying an item.

### 4. re-auth.js
This file contains the logic required for checking if the page the use is visiting
requires authentication. If authentication is required, it blocks access to the page and
displays the login page. It then checks the username and password entered by the user to determine
if they are correct. If they are correct, it allows the user to proceed but if wrong it gives feedback to
the user to give the correct username and password. It makes use of the dspace 6.3 REST API.

## Installation Instructions
Begin by cloning the dspace code from the branch `otuoma/add-watermark` as shown below;

````
git clone -b otuoma/add-watermark https://github.com/otuoma/DSpace.git
````

Install all the dspace prerequisite software as shown in the official documentation at [Installing DSpace](https://wiki.lyrasis.org/display/DSDOC6x/Installing+DSpace).

Then inside the directory `dspace/config`, edit the file `local.cfg` and add the location of the watermark
image. Place the image anywhere on the file system as long as you provide the
correct path to it using the following setting in `local.cfg`

````
watermark.image = ${dspace.dir}/webapps/xmlui/static/images/hyperlink-logo.png
````
The file `dspace/config/item-submission.xml` is already updated this the following code

````
<step id="watermark">
<heading>submit.progressbar.watermark</heading>
<processing-class>org.dspace.submit.step.WatermarkStep</processing-class>
<xmlui-binding>org.dspace.app.xmlui.aspect.submission.submit.WatermarkStep</xmlui-binding>
<workflow-editable>true</workflow-editable>
</step>
````

and

````
<step id="watermark"/>
````

To disable watermarking, comment out the above last bit of code.

Then run the following command to compile the code.

````
mvn package -Dmirage2.on=true -Dmirage2.deps.included=false
````

If you don't need Mirage2 theme, simply run the following command instead.

````
mvn package
````

Then move to the compiled code directory

````
cd dspace/target/dspace-installer
````

Then run the following command to deploy the code for tomcat consumption.

````
ant fresh_install
````

Follow up with the dspace documentation to complete the installation process.

### Resource Re-Authentication Settings #####
Create any dspace object and copy the resource's URI starting with the handle and add it to the list as shown below in local.cfg.

Separate each resource's URL with a space. Any URL pattern added here will force users to re-authenticate.

```
reauthentication.patterns = handle/123456789/2 handle/123456789/3 handle/123456789/32
```