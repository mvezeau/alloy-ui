AUI.add("aui-form-builder-field",function(bF){var bz=bF.Lang,aC=bz.isArray,ag=bz.isString,c="acceptChildren",aw="boundingBox",bN="builder",bV="button",C="buttons",b0="buttonsNode",bb="checkbox",D="checked",b4="children",bR="clearfix",ax="close",az="component",bZ="contentBox",a7="container",y="default",aE="delete",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",W="dropNode",ay="dropZone",aV="dropZoneNode",bc="duplicate",G="edit",bj="",a2="field",f="fields",bp="for",r="form",aL="formBuilder",ba="form-builder-field",o="helper",aj="hidden",q="icon",bQ="id",aa="label",Y="labelNode",aT="metadata",aq="name",b6="node",a="panel",aM="portalLayout",a5="predefinedValue",a3="proxy",ah="required",bk="state",aY="settings",ai="settingsFormNode",bJ="showLabel",al="size",P=" ",bH="templateNode",bw="zone",aF="widget",w=bF.ClassNameManager.getClassName,a0=w(az),a8=w(a2,aa),b3=w(o,bR),V=w(o,aj),bs=w(bk,y),x=w(r,bN,bV),ak=w(r,bN,bV,aE),aS=w(r,bN,bV,bc),H=w(r,bN,bV,G),b5=w(r,bN,q),i=w(r,bN,q,aE),t=w(r,bN,q,bc),bB=w(r,bN,q,G),bo=w(r,bN,a2),bd=w(r,bN,a2,C),aW=w(r,bN,ap,b6),bx=w(r,bN,ap,bw),bP=w(aF),bD='<li class="'+[bP,a0,bo].join(P)+'"></li>',m='<div class="'+[bd,V].join(P)+'">'+'<a class="'+[x,H].join(P)+'" href="javascript:;" title="Edit">'+'<div class="'+[b5,bB].join(P)+'"></div>'+"</a>"+'<a class="'+[x,aS].join(P)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[b5,t].join(P)+'"></div>'+"</a>"+'<a class="'+[x,ak].join(P)+'" href="javascript:;" title="Delete">'+'<div class="'+[b5,i].join(P)+'"></div>'+"</a>"+"</div>",bS='<div class="'+b3+'"></div>',aJ='<label class="'+a8+'"></label>',U='<ul class="'+bx+'"></ul>';var b2=bF.Component.create({NAME:ba,ATTRS:{acceptChildren:{value:true},formBuilder:{value:undefined},id:{value:bj},icon:{value:bj},label:{value:bj},name:{valueFn:function(){var A=this;return A.get(O)+(++bF.Env._uidx);}},parent:{value:null},predefinedValue:{value:bj},required:{setter:bF.DataType.Boolean.parse,value:false},selected:{setter:bF.DataType.Boolean.parse,value:false},showLabel:{setter:bF.DataType.Boolean.parse,value:true},template:{value:bj},type:{value:bj},buttonsNode:{valueFn:function(){return bF.Node.create(m);}},dropZoneNode:{valueFn:function(){return bF.Node.create(U);}},labelNode:{valueFn:function(){return bF.Node.create(aJ);}},templateNode:{valueFn:"getNode"}},AUGMENTS:[bF.FormBuilderFieldSupport],UI_ATTRS:[c,a5,aa,aq,bJ],HTML_PARSER:{buttonsNode:bt+bd,dropZoneNode:bt+bx,labelNode:aa+bt+a8},EXTENDS:bF.Widget,prototype:{BOUNDING_TEMPLATE:bD,initializer:function(){var A=this;A.boundingBox=A.get(aw);A.buttonsNode=A.get(b0);A.contentBox=A.get(bZ);A.labelNode=A.get(Y);A.templateNode=A.get(bH);A.boundingBox.setData(a2,A);},bindUI:function(){var A=this;},renderUI:function(){var A=this;var ca=A.boundingBox;var cb=A.buttonsNode;var L=A.contentBox;var b9=A.labelNode;var b8=A.templateNode;if(!ca.contains(cb)){ca.prepend(cb);}if(!L.contains(b9)){L.append(b9);b9.setAttribute(bp,b8.get(bQ));}if(!L.contains(b8)){L.append(b8);}},saveSettings:function(){var A=this;var L=A.get(aL);var b8=L.get(ai);bF.Array.each(bF.io._serialize(b8._node).split("&"),function(b9){var ca=b9.split("=");A.set(ca[0],decodeURIComponent(ca[1]));});},renderSettings:function(){var A=this;var b9=A.get(aL);var ca=b9.get(ai);if(!A.fieldSettingsNode){A.fieldSettingsNode=bF.Node.create(bS);var cb=bF.Node.create(bS);A.labelField=new bF.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(cb);A.labelField.get(b6).on({keyup:bF.bind(A._onLabelKeyUp,A)});A.showLabelField=new bF.Field({type:"checkbox",name:bJ,labelText:"Show label",labelAlign:"left",value:A.get(bJ)}).render(cb);var L=A.showLabelField.get(b6);L.set(D,A.get(bJ));L.on({change:bF.bind(A._onSettingsFieldChange,A)});A._renderSettingsFields([{type:"text",name:aq,labelText:"Name",value:A.get(aq)},{type:"text",name:a5,labelText:"Default value",value:A.get(a5)}],cb);A.requiredField=new bF.Field({type:"checkbox",name:ah,labelText:"Required",labelAlign:"left",value:ah}).render(cb);var b8=A.requiredField.get(b6);b8.set(D,A.get(ah));b8.on({change:bF.bind(A._onSettingsFieldChange,A)});A.propertiesPanel=new bF.Panel({bodyContent:cb,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(aw));}ca.setContent(A.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelKeyUp:function(L){var A=this;var b9=L.target;var b8=b9.val();A.set(aa,b8);},_onSettingsFieldChange:function(L){var A=this;var b9=L.target;var b8=b9.val();if(b9.get(O)==bb){b8=b9.get(D);}A.set(b9.get(aq),b8);},_renderSettingsFields:function(b8,L){var A=this;bF.each(b8,function(ca){var cb=new bF.Field(ca).render(L);var b9=cb.get(b6);if(ca.type==bb){b9.set(D,ca.value);}A[ca.name+"Field"]=cb;});},_uiSetAcceptChildren:function(ca){var A=this;var b8=A.get(aw);var b9=A.get(aV);var L=b8.one(bt+bx);if(ca&&!L){b8.append(b9);}else{if(!ca&&L){L.remove();}else{if(ca&&L){A.set(aV,L);}}}},_uiSetLabel:function(b8){var A=this;var L=A.get(Y);L.setContent(b8);},_uiSetName:function(b8){var A=this;var L=A.get(bH);L.set(aq,b8);},_uiSetPredefinedValue:function(b8){var A=this;var L=A.get(bH);L.val(b8);},_uiSetShowLabel:function(b8){var A=this;var L=A.get(Y);L.toggleClass(V,!b8);}}});bF.FormBuilderField=b2;bF.FormBuilder.types["field"]=bF.FormBuilderField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aR=bF.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aw="boundingBox",bV="button",bT="buttonType",bZ="contentBox",a7="container",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",af="form-builder-button-field",bQ="id",q="icon",aH="input",aa="label",aq="name",b6="node",bK="option",bI="options",aM="portalLayout",a5="predefinedValue",a3="proxy",bu="reset",aU="selected",by="selectedIndex",bi="submit",P=" ",ad="strings",a9="template",bH="templateNode",bl="text",O="type",n="value",w=bF.ClassNameManager.getClassName,at=w(a2,aH),bM=w(a2,aH,bl),bo=w(ba),Q=w(ba,b6),ao=w(aO,b6),bs=w(bk,y),bm='<input id="{id}" class="'+[Q,at].join(P)+'" name="{name}" type="{type}" value="{value}" />',b7=[bi,bu,bV];
var S=bF.Component.create({NAME:af,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:bi,validator:function(A){return bF.Array(b7).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:aR(bi)},showLabel:{value:false},strings:{value:{button:"Button",reset:"Reset",submit:"Submit"}},template:{value:bm}},UI_ATTRS:[c,a5,aa,aq,bT,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{getHTML:function(){var A=this;var b8=A.get(a9);var cc=A.get(bQ);var ca=A.get(aa);var b9=A.get(aq);var L=A.get(bT);var cb=A.get(a5);return bF.substitute(b8,{id:cc,label:ca,name:b9,type:L,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var cc=this;var L=cc.get(aL);var A=L.get(ai);var cb=cc.get(bT);var cd=cc.get(ad);bF.FormBuilderButtonField.superclass.renderSettings.apply(cc,arguments);if(!cc._renderedButtonSettings){cc._renderedButtonSettings=true;var ca=cc.propertiesPanel.get(d);var cf=[];bF.each(b7,function(cg){cf.push({labelText:cd[cg],value:cg});});var ce=new bF.Select({labelText:"Button type",name:bT,options:cf}).render(ca.item(0));var b8=ce.get(b6);b8.on({change:bF.bind(cc._onButtonTypeChange,cc)});var b9=bF.Array(b7).indexOf(cb);b8.all(bK).item(b9).set(aU,true);}},_onButtonTypeChange:function(L){var A=this;var b8=L.target;A.set(bT,b8.get(n));},_uiSetButtonType:function(b8){var A=this;var L=A.get(bH);L.set(O,b8);}}});bF.FormBuilderButtonField=S;bF.FormBuilder.types["button"]=bF.FormBuilderButtonField;var bz=bF.Lang,aC=bz.isArray,aZ=bz.isBoolean,bg=bz.isNumber,ag=bz.isString,aw="boundingBox",d="bodyContent",bb="checkbox",D="checked",an="choice",bZ="contentBox",a7="container",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",bW="form-builder-checkbox-field",bQ="id",q="icon",aI="inline",aa="label",g="labels",aq="name",b6="node",aM="portalLayout",a5="predefinedValue",a3="proxy",al="size",P=" ",a9="template",bH="templateNode",n="value",w=bF.ClassNameManager.getClassName,b=w(a2),bv=w(a2,bb),bC=w(a2,an),bo=w(ba),bX=w(ba,bb),Q=w(ba,b6),bs=w(bk,y),ab=w(a2,g,aI),bD='<li class="'+[bP,a0,bo,bX].join(P)+'"></li>',aA='<input id="{id}" class="'+[Q,b,bv,bC].join(P)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var T=bF.Component.create({NAME:bW,ATTRS:{predefinedValue:{setter:bF.DataType.Boolean.parse,value:false},template:{value:aA},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{BOUNDING_TEMPLATE:bD,bindUI:function(){var A=this;bF.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.templateNode;L.on({"change":bF.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.contentBox;var b8=A.templateNode;var b9=A.labelNode;bF.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);b9.insert(b8,b9,"before");},getHTML:function(){var A=this;var L=A.get(a9);var ca=A.get(D);var cc=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var cb=A.get(a5);return bF.substitute(L,{checked:ca?'checked="checked"':bj,id:cc,label:b9,name:b8,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var L=this;var b9=L.get(aL);var ca=b9.get(ai);bF.FormBuilderCheckBoxField.superclass.renderSettings.apply(L,arguments);if(!L._renderedCheckboxSettings){L._renderedCheckboxSettings=true;L.predefinedValueField.destroy();var A=L.propertiesPanel.get(d);var b8=new bF.Field({type:"checkbox",name:a5,labelText:"Checked",labelAlign:"left"}).render(A.item(0));L.checkedFieldNode=b8.get(b6);L.checkedFieldNode.on({change:bF.bind(L._onValueChange,L)});L.checkedFieldNode.set(D,L.get(a5));}},_onValueChange:function(L){var A=this;var b8=L.target;A.set(a5,b8.get(D));},_uiSetPredefinedValue:function(b9){var A=this;var b8=A.get(bH);var L=A.checkedFieldNode;if(L){L.set(D,b9);}b8.set(D,b9);}}});bF.FormBuilderCheckBoxField=T;bF.FormBuilder.types["checkbox"]=bF.FormBuilderCheckBoxField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aw="boundingBox",bZ="contentBox",a7="container",bt=".",ap="drop",bj="",a2="field",f="fields",ba="form-builder-field",B="form-builder-fieldset-field",bQ="id",q="icon",aa="label",aq="name",b6="node",a5="predefinedValue",P=" ",a9="template",bH="templateNode",bl="text",n="value",bw="zone",w=bF.ClassNameManager.getClassName,bo=w(ba),Q=w(ba,b6),bx=w(r,bN,ap,bw),a4='<fieldset class="'+[Q].join(P)+'"></fieldset>',j='<legend class="'+a8+'"></legend>';var u=bF.Component.create({NAME:B,ATTRS:{acceptChildren:{value:true,readOnly:true},template:{value:bj},labelNode:{valueFn:function(){return bF.Node.create(j);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,aa,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{CONTENT_TEMPLATE:a4,renderUI:function(){var A=this;var ca=A.boundingBox;var cb=A.buttonsNode;var L=A.contentBox;var b9=A.labelNode;var b8=A.templateNode;if(!ca.contains(cb)){ca.prepend(cb);}if(!L.contains(b9)){L.append(b9);}},renderSettings:function(){var A=this;var b8=A.get(aL);var b9=b8.get(ai);if(!A._renderedFieldsetSettings){A._renderedFieldsetSettings=true;A.fieldSettingsNode=bF.Node.create(bS);var ca=bF.Node.create(bS);A.labelField=new bF.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(ca);A.labelField.get(b6).on({keyup:bF.bind(A._onLabelKeyUp,A)});A.showLabelField=new bF.Field({type:"checkbox",name:bJ,labelText:"Show label",labelAlign:"left",value:A.get(bJ)}).render(ca);var L=A.showLabelField.get(b6);L.set(D,A.get(bJ));L.on({change:bF.bind(A._onSettingsFieldChange,A)});A.propertiesPanel=new bF.Panel({bodyContent:ca,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(aw));}b9.setContent(A.fieldSettingsNode);},_uiSetAcceptChildren:function(ca){var A=this;
var L=A.get(bZ);var b9=A.get(aV);var b8=L.one(bt+bx);if(ca&&!b8){L.append(b9);}else{if(!ca&&b8){b8.remove();}else{if(ca&&b8){A.set(aV,b8);}}}},}});bF.FormBuilderFieldsetField=u;bF.FormBuilder.types["fieldset"]=bF.FormBuilderFieldsetField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aw="boundingBox",bZ="contentBox",a7="container",bt=".",bj="",a2="field",f="fields",ba="form-builder-field",bY="form-builder-file-upload-field",bQ="id",q="icon",aa="label",aq="name",b6="node",a5="predefinedValue",P=" ",a9="template",bH="templateNode",bl="text",n="value",w=bF.ClassNameManager.getClassName,bo=w(ba),Q=w(ba,b6),bs=w(bk,y),bh='<input id="{id}" class="'+[Q].join(P)+'" name="{name}" type="file" value="{value}" />';var E=bF.Component.create({NAME:bY,ATTRS:{template:{value:bh},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{getHTML:function(){var A=this;var L=A.get(a9);var cc=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var ca=A.get(al);var cb=A.get(a5);return bF.substitute(L,{id:cc,label:b9,name:b8,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var A=this;var b8=A.get(aL);var b9=b8.get(ai);if(!A._renderedFileUploadSettings){A._renderedFileUploadSettings=true;A.fieldSettingsNode=bF.Node.create(bS);var ca=bF.Node.create(bS);A.labelField=new bF.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(ca);A.labelField.get(b6).on({keyup:bF.bind(A._onLabelKeyUp,A)});A.showLabelField=new bF.Field({type:"checkbox",name:bJ,labelText:"Show label",labelAlign:"left",value:A.get(bJ)}).render(ca);var L=A.showLabelField.get(b6);L.set(D,A.get(bJ));L.on({change:bF.bind(A._onSettingsFieldChange,A)});A._renderSettingsFields([{type:"text",name:aq,labelText:"Name",value:A.get(aq)},{type:"checkbox",name:ah,labelText:"Required",labelAlign:"left",value:A.get(ah)}],ca);A.propertiesPanel=new bF.Panel({bodyContent:ca,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(aw));}b9.setContent(A.fieldSettingsNode);}}});bF.FormBuilderFileUploadField=E;bF.FormBuilder.types["fileupload"]=bF.FormBuilderFileUploadField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aw="boundingBox",bZ="contentBox",a7="container",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",aO="form-builder-input-field",bQ="id",q="icon",aH="input",aa="label",aq="name",b6="node",aM="portalLayout",a5="predefinedValue",a3="proxy",P=" ",a9="template",bH="templateNode",bl="text",n="value",w=bF.ClassNameManager.getClassName,at=w(a2,aH),bM=w(a2,aH,bl),bo=w(ba),Q=w(ba,b6),ao=w(aO,b6),bs=w(bk,y),bm='<input id="{id}" class="'+[Q,at,bM].join(P)+'" name="{name}" type="text" value="{value}" />';var l=bF.Component.create({NAME:aO,ATTRS:{template:{value:bm},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{bindUI:function(){var A=this;bF.FormBuilderInputField.superclass.bindUI.apply(A,arguments);var L=A.templateNode;L.on({"keyup":bF.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(a9);var cc=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var ca=A.get(al);var cb=A.get(a5);return bF.substitute(L,{id:cc,label:b9,name:b8,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aL);var b8=L.get(ai);bF.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedInputSettings){A._renderedInputSettings=true;var b9=b8.one("input[name=predefinedValue]");b9.on({"keyup":bF.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var b8=L.target;A.set(a5,b8.val());},_uiSetPredefinedValue:function(cb){var A=this;var b8=A.get(aL);var b9=b8.get(ai);var ca=b9.one("input[name=predefinedValue]");var L=A.get(bH);L.val(cb);if(ca&&A.get(aU)){ca.val(cb);}}}});bF.FormBuilderInputField=l;bF.FormBuilder.types["text"]=bF.FormBuilderInputField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aR=bF.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),I="add",ae="addNode",aw="boundingBox",bV="button",bT="buttonType",bZ="contentBox",a7="container",y="default",aX="defaultName",s="defaultOptions",z="defaultValue",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",F="form-builder-multiple-choice-field",q="icon",bQ="id",aH="input",Z="item",aa="label",bU="multiple",aq="name",b6="node",bK="option",bf="optionTemplate",bI="options",a5="predefinedValue",a3="proxy",p="remove",bu="reset",bi="submit",P=" ",a9="template",bH="templateNode",bl="text",O="type",n="value",w=bF.ClassNameManager.getClassName,at=w(a2,aH),bM=w(a2,aH,bl),k=w(a2,bI,I),M=w(a2,bI,Z),K=w(a2,bI,Z,aH),bn=w(a2,bI,Z,aH,aq),bG=w(a2,bI,Z,aH,n),aQ=w(a2,bI,Z,p),bo=w(ba),Q=w(ba,b6),ao=w(aO,b6),bs=w(bk,y),br='<div class="'+[M,ab,b3].join(P)+'">'+'<input type="text" name="name" class="'+[K,bn,at,bM].join(P)+'" value="{name}" />'+'<input type="text" name="value" class="'+[K,bG,at,bM].join(P)+'" value="{value}" />'+'<a href="javascript:;" class="'+aQ+'">&nbsp;</a>'+"</div>";TPL_ADD='<a class="'+k+'" href="javascript:;">Add an option</a>',KEY_ENTER=13;var aD=bF.Component.create({NAME:bI,ATTRS:{allowClear:{value:false},defaultName:{value:bj},defaultValue:{value:bj},options:{value:[],getter:"_getOptions",validator:aC},addNode:{valueFn:function(){return bF.Node.create(TPL_ADD);
}}},HTML_PARSER:{addNode:bt+k},UI_ATTRS:[bI],EXTENDS:bF.Widget,prototype:{initializer:function(){var A=this;A.boundingBox=A.get(aw);A.contentBox=A.get(bZ);},renderUI:function(){var A=this;var L=A.boundingBox;var b8=A.get(ae);if(!b8.inDoc()){L.append(b8);}},bindUI:function(){var A=this;var L=A.boundingBox;var b8=A.get(ae);b8.on("click",bF.bind(A._onClickAdd,A));L.delegate("click",bF.bind(A._onClickOptionRemove,A),bt+aQ);L.delegate("keypress",bF.bind(A._onKeyPressOption,A),bt+K);},add:function(L){var A=this;var b8=A.get(bI);b8.push(L);A.set(bI,b8);},clear:function(){var A=this;if(A.get(ALLOW_CLEAR)){A.set(bI,[]);}},remove:function(L){var A=this;var b8=A._getOptionNode(L);if(b8){b8.remove();}A.items=A.contentBox.all(bt+M);},_addNewOption:function(){var L=this;var b8=L._createOption({name:L.get(aX),value:L.get(z)});b8=bF.Node.create(b8);L.contentBox.append(b8);var A=b8.one(aH);A.focus();A.select();L.items=L.contentBox.all(bt+M);return b8;},_createOption:function(L){var A=this;return bF.substitute(br,L);},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(b8){var A=this;var L=[];if(A.items){bF.each(A.items,function(b9){var ca=b9.one(bt+bn);var cb=b9.one(bt+bG);L.push({name:ca.val(),value:cb.val()});});}else{L=b8;}return L;},_indexOfTarget:function(b8){var A=this;var L=b8.ancestor(bt+M);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(b9){var A=this;var b8=A.get(bI);var L=A._indexOfTarget(b9.target);A.remove(L);},_onKeyPressOption:function(ca){var A=this;var b9=A.get(bI);var cd=ca.currentTarget;var cc=ca.keyCode;var L=A.items;if(cc==KEY_ENTER){var b8=A._indexOfTarget(cd);var cb=cd.hasClass(bG);if((b8==L.size()-1)&&cb){A._addNewOption();}}},_uiSetOptions:function(b9){var A=this;var b8=[];var L=A.get(bZ);L.empty();bF.each(b9,function(ca){L.append(A._createOption(ca));});A.items=L.all(bt+M);}}});var e=bF.Component.create({NAME:F,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{name:"option 1",value:"value 1"},{name:"option 2",value:"value 2"},{name:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{name}</option>'},},UI_ATTRS:[c,a5,aa,aq,bI,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{initializer:function(){var A=this;bF.FormBuilderMultipleChoiceField.superclass.initializer.apply(A,arguments);},getNode:function(){var A=this;return bF.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;bF.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var L=bF.Node.create(bS);A.optionsPanel=new bF.Panel({bodyContent:L,collapsible:true,title:"Options"}).render();A.options=new aD({options:A.get(bI)}).render(L);A.fieldSettingsNode.append(A.optionsPanel.get(aw));}},saveSettings:function(){var A=this;bF.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(bI,A.options.get(bI));},_uiSetOptions:function(b8){var A=this;var L=A.get(bH);L.empty();bF.each(b8,function(b9){L.append(bF.substitute(A.get(bf),b9));});}}});bF.FormBuilderMultipleChoiceField=e;bF.FormBuilder.types["multiple-choice"]=bF.FormBuilderMultipleChoiceField;var bz=bF.Lang,aC=bz.isArray,aZ=bz.isBoolean,bg=bz.isNumber,ag=bz.isString,aw="boundingBox",d="bodyContent",D="checked",an="choice",bZ="contentBox",a7="container",bt=".",bj="",a2="field",f="fields",ba="form-builder-field",aP="form-builder-radio-field",bQ="id",q="icon",aI="inline",aa="label",g="labels",aq="name",b6="node",bO="optionsContainerNode",a5="predefinedValue",J="radio",al="size",P=" ",a9="template",bH="templateNode",n="value",w=bF.ClassNameManager.getClassName,b=w(a2),bC=w(a2,an),bo=w(ba),av=w(ba,J),Q=w(ba,b6),N=w(ba,bI,a7),bs=w(bk,y),ab=w(a2,g,aI),bD='<li class="'+[bP,a0,bo,av].join(P)+'"></li>',R='<div class="'+N+'"></div>',aB='<input id="{id}" class="'+[Q,b,bC].join(P)+'" name="{name}" type="radio" value="{value}" {checked} />';var h=bF.Component.create({NAME:aP,ATTRS:{name:{value:J},optionTemplate:{value:aB},template:{value:aB},optionsContainerNode:{valueFn:function(){return bF.Node.create(R);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bJ,bI],CSS_PREFIX:bo,HTML_PARSER:{optionsContainerNode:bt+N,templateNode:bt+Q},EXTENDS:bF.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:bD,renderUI:function(){var A=this;var b9=A.boundingBox;var cb=A.buttonsNode;var L=A.contentBox;var b8=A.labelNode;if(!b9.contains(cb)){b9.prepend(cb);}if(!L.contains(b8)){L.append(b8);}var ca=A.get(bO);if(!L.contains(ca)){L.append(ca);}},getHTML:function(){var A=this;var L=A.get(a9);var ca=A.get(D);var cc=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var cb=A.get(a5);return bF.substitute(L,{checked:ca?'checked="checked"':bj,id:cc,label:b9,name:b8,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},_onFieldChange:function(L){var A=this;var b8=L.target;A.set(a5,b8.val());},_uiSetOptions:function(ca){var A=this;var L=A.get(bZ);var b9=A.get(bO);var b8=A.get(bH);b9.empty();bF.each(ca,function(cd){var cb=new bF.Field({type:J,name:A.get(aq),labelText:cd.name,labelAlign:"left",value:cd.value}).render(b9);var cc=cb.get(b6);if(cd.value==A.get(a5)){cc.set(D,true);}cc.on({change:bF.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(ca){var A=this;var L=A.get(aL);var b8=L.get(ai);var b9=b8.one("input[name=predefinedValue]");if(b9){b9.val(ca);}}}});bF.FormBuilderRadioField=h;bF.FormBuilder.types["radio"]=bF.FormBuilderRadioField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,ar=function(A){return(A instanceof bF.Node);},aK=function(A){return(A instanceof bF.NodeList);},aR=bF.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aw="boundingBox",bV="button",bT="buttonType",bZ="contentBox",a7="container",s="defaultOptions",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",bE="form-builder-select-field",bQ="id",q="icon",aH="input",aa="label",bU="multiple",aq="name",b6="node",bK="option",bI="options",aM="portalLayout",a5="predefinedValue",a3="proxy",bu="reset",by="selectedIndex",bi="submit",P=" ",a9="template",bH="templateNode",bl="text",O="type",n="value",w=bF.ClassNameManager.getClassName,at=w(a2,aH),bM=w(a2,aH,bl),bo=w(ba),Q=w(ba,b6),ao=w(aO,b6),bs=w(bk,y),am='<select id="{id}" class="'+[Q].join(P)+'" name="{name}" value="{value}"></select>';
var X=bF.Component.create({NAME:bE,ATTRS:{multiple:{value:false,validator:aZ},template:{value:am},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bI,bJ,bU],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var L=A.get(a9);var cb=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var ca=A.get(a5);return bF.substitute(L,{id:cb,label:b9,name:b8,value:ca});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var L=this;var ca=L.get(aL);var cb=ca.get(ai);bF.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var A=L.propertiesPanel.get(d);var b8=new bF.Field({type:"checkbox",name:bU,labelText:"Multiple",labelAlign:"left"}).render(A.item(0));var b9=b8.get(b6);b9.on({change:bF.bind(L._onSettingsFieldChange,L)});b9.set(D,L.get(bU));}},_uiSetMultiple:function(b8){var A=this;var L=A.get(bH);if(b8){L.setAttribute(bU,bU);}else{L.removeAttribute(bU);}}}});bF.FormBuilderSelectField=X;bF.FormBuilder.types["select"]=bF.FormBuilderSelectField;var bz=bF.Lang,aC=bz.isArray,bg=bz.isNumber,ag=bz.isString,aw="boundingBox",bZ="contentBox",a7="container",bt=".",aN="drag",be="dragContainer",b1="dragContainerNode",ac="dragNodesList",ap="drop",aG="dropContainer",a1="dropContainerNode",bj="",a2="field",f="fields",ba="form-builder-field",v="form-builder-textarea-field",bQ="id",q="icon",aa="label",aq="name",b6="node",aM="portalLayout",a5="predefinedValue",a3="proxy",al="size",P=" ",a9="template",bH="templateNode",bl="text",bq="textarea",n="value",w=bF.ClassNameManager.getClassName,b=w(a2),a6=w(a2,bl),bL=w(a2,bq),bo=w(ba),Q=w(ba,b6),ao=w(aO,b6),bs=w(bk,y),bA='<textarea id="{id}" class="'+[Q,b,a6,bL].join(P)+'" name="{name}">{value}</textarea>';var au=bF.Component.create({NAME:v,ATTRS:{template:{value:bA},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a5,aa,aq,bJ],CSS_PREFIX:bo,HTML_PARSER:{templateNode:bt+Q},EXTENDS:bF.FormBuilderField,prototype:{bindUI:function(){var A=this;bF.FormBuilderInputField.superclass.bindUI.apply(A,arguments);var L=A.templateNode;L.on({"keyup":bF.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(a9);var cc=A.get(bQ);var b9=A.get(aa);var b8=A.get(aq);var ca=A.get(al);var cb=A.get(a5);return bF.substitute(L,{id:cc,label:b9,name:b8,value:cb});},getNode:function(){var A=this;return bF.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aL);var b8=L.get(ai);bF.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedTextareaSettings){A._renderedTextareaSettings=true;var b9=b8.one("input[name=predefinedValue]");b9.on({"keyup":bF.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var b8=L.target;A.set(a5,b8.val());},_uiSetPredefinedValue:function(cb){var A=this;var b8=A.get(aL);var b9=b8.get(ai);var ca=b9.one("input[name=predefinedValue]");var L=A.get(bH);L.val(cb);if(ca&&A.get(aU)){ca.val(cb);}}}});bF.FormBuilderTextAreaField=au;bF.FormBuilder.types["textarea"]=bF.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","io","substitute"],skinnable:true});