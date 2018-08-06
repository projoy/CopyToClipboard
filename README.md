# CopyToClipboard
Chrome插件
把页面指定部分的内容复制到粘贴板

1.在打包扩展程序后，会提示"该扩展程序未列在 Chrome 网上应用店中，并可能是在您不知情的情况下添加的",导致插件无法加载使用。
   对此，解决办法是：
   (1)下载chrome策略文件：chrome.adm
        下载地址：https://dl.google.com/dl/edgedl/chrome/policy/policy_templates.zip
		[在源文件中，已经上传了chrome.adm(windows版本)]
   (2) 配置后，在本地组策略编辑器(gpedit.msc)配置chrome扩展白名单中添加 扩展的Id
        配置路径：本地组策略编辑器->计算机配置->管理模板->经典管理模板(ADM)->Google->Google Chrome->扩展程序->配置扩展程序安装白名单
   (3)将打包后的chrome插件id(如:ID：kadmjjjlagjgicjkahhkankapdplippi) 添加到里面 即可

2.使用
    在源文件的js/content-script.js中添加相应的逻辑即可(源文件中已经添加了csdn的样例,照样子处理即可)

