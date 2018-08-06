console.log('content script!');

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{
    console.log(location.host);

    //根据站点，将相应的内容复制到粘贴板
    if(location.host == "blog.csdn.net"){
        var txtContent = $(".blog-content-box:first-child").html();
 
        copyToClipboard(txtContent);
    }   
 
});


function copyToClipboard( text ){
                var copyDiv = document.createElement('div');
                copyDiv.contentEditable = true;
                document.body.appendChild(copyDiv);
                copyDiv.innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                document.body.removeChild(copyDiv);
            }