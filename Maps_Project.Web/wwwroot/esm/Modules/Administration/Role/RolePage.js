import{a as w}from"../../../_chunks/chunk-6OFSWPLP.js";import{a as h}from"../../../_chunks/chunk-U5SKCCFF.js";import{e as y,f,g as D,h as r,i as u}from"../../../_chunks/chunk-SHZY47RY.js";import{c as o,g as m,h as p,k as a}from"../../../_chunks/chunk-LRH74UCM.js";var S=m(a(),1);var d=m(a(),1);var c=m(a(),1);var e=m(a(),1);var n=class extends e.TemplatedDialog{constructor(t){super(t);this.permissions=new w(this.byId("Permissions"),{showRevoke:!1}),D.List({RoleID:this.options.roleID,Module:null,Submodule:null},P=>{this.permissions.value=P.Entities.map(l=>({PermissionKey:l}))}),this.permissions.implicitPermissions=(0,e.getRemoteData)("Administration.ImplicitPermissions")}getDialogOptions(){let t=super.getDialogOptions();return t.buttons=[{text:(0,e.localText)("Dialogs.OkButton"),click:P=>{D.Update({RoleID:this.options.roleID,Permissions:this.permissions.value.map(l=>l.PermissionKey),Module:null,Submodule:null},l=>{this.dialogClose(),window.setTimeout(()=>(0,e.notifySuccess)((0,e.localText)("Site.RolePermissionDialog.SaveSuccess")),0)})}},{text:(0,e.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}],t.title=(0,e.format)((0,e.localText)("Site.RolePermissionDialog.DialogTitle"),this.options.title),t}getTemplate(){return'<div id="~_Permissions"></div>'}};o(n,"RolePermissionDialog");var x="edit-permissions",i=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new f(this.idPrefix)}getFormKey(){return f.formKey}getRowDefinition(){return r}getService(){return u.baseUrl}getToolbarButtons(){let t=super.getToolbarButtons();return t.push({title:h.Site.RolePermissionDialog.EditButton,cssClass:x,icon:"fa-lock text-green",onClick:()=>{new n({roleID:this.entity.RoleId,title:this.entity.RoleName}).dialogOpen()}}),t}updateInterface(){super.updateInterface(),this.toolbar.findButton(x).toggleClass("disabled",this.isNewOrDeleted())}};o(i,"RoleDialog"),i=p([c.Decorators.registerClass("Maps_Project.Administration.RoleDialog")],i);var s=class extends d.EntityGrid{getColumnsKey(){return y.columnsKey}getDialogType(){return i}getRowDefinition(){return r}getService(){return u.baseUrl}constructor(g){super(g)}getDefaultSortBy(){return[r.Fields.RoleName]}};o(s,"RoleGrid"),s=p([d.Decorators.registerClass("Maps_Project.Administration.RoleGrid")],s);function v(){(0,S.initFullHeightGridPage)(new s($("#GridDiv")).element)}o(v,"pageInit");export{v as default};
//# sourceMappingURL=RolePage.js.map