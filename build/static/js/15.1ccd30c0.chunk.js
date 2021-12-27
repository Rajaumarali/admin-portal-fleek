(this["webpackJsonpFleek-Admin-Portal"]=this["webpackJsonpFleek-Admin-Portal"]||[]).push([[15],{1696:function(e,t,a){"use strict";a.r(t);var n=a(126),i=a(127),r=a(288),l=a(129),o=a(128),c=a(0),s=a.n(c),d=a(1355),u=a(436),g=a(1015),m=a(1016),h=a(136),p=a(1088),y=a(1738),f=a(1735),_=a(959),E=a(105),v=a(1079),w=a(1742),C=a(1688),b=a(1089),k=a.n(b),M=a(287),A=d.a.Meta,S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=function(e){i.setState({is_pic_change:!0}),"uploading"!==e.file.status?"done"===e.file.status&&(i.setState({image_obj:e.file.originFileObj}),i.getBase64(e.file.originFileObj,(function(e){return i.setState({category_picture:e,loading:!1})}))):i.setState({loading:!0})},i.handleChangeAdd=function(e){"uploading"!==e.file.status?"done"===e.file.status&&(i.setState({new_image_obj:e.file.originFileObj}),i.getBase64(e.file.originFileObj,(function(e){return i.setState({new_category_picture:e,loading:!1})}))):i.setState({loading:!0})},i.state={categories_data:[],isLoading:!0,viewEditModal:!1,viewDeleteModal:!1,viewAddModal:!1,category_id:"",category_title:"",category_picture:"",is_pic_change:!1,new_category_title:"",new_category_picture:""},i.handleEditCategory=i.handleEditCategory.bind(Object(r.a)(i)),i.handleDeleteCategory=i.handleDeleteCategory.bind(Object(r.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchAllCategories()}},{key:"fetchAllCategories",value:function(){var e=this;fetch(M.api_base_url+"listAllCategories",M.method_post).then((function(e){return e.json()})).then((function(t){e.setState({categories_data:t.data,isLoading:!1})})).catch()}},{key:"handleEditCategory",value:function(e){this.setState({category_id:e.id,category_title:e.category_name,category_picture:e.picture}),this.setViewEditModal(!0)}},{key:"handleDeleteCategory",value:function(e){this.setState({category_id:e.id}),this.setViewDeleteModal(!0)}},{key:"setViewEditModal",value:function(e){this.setState({viewEditModal:e})}},{key:"setViewDeleteModal",value:function(e){this.setState({viewDeleteModal:e})}},{key:"setViewAddModal",value:function(e){this.setState({viewAddModal:e})}},{key:"confirmDeleteCategory",value:function(e){var t=this;this.setViewDeleteModal(!1);var a={method:"DELETE",headers:M.headers,body:JSON.stringify({category_id:e})};fetch(M.api_base_url+"deleteCategory",a).then((function(e){return e.json()})).then((function(e){u.b.success("Removed Successfully"),t.setState({isLoading:!0}),t.fetchAllCategories()})).catch()}},{key:"confirmEditCategory",value:function(e){var t=this;this.setViewEditModal(!1);var a=new FormData;!0===this.state.is_pic_change&&a.append("image",this.state.image_obj),a.append("category_name",this.state.category_title),a.append("category_id",e),a.append("is_pic_change",this.state.is_pic_change),k.a.put(M.api_base_url+"editCategory",a,M.axios_config).then((function(e){e.data.status?(u.b.success(e.data.message),t.setState({isLoading:!0}),t.fetchAllCategories()):u.b.error(e.data.message)})).catch((function(e){u.b.error("Something went wrong!",e)}))}},{key:"confirmAddCategory",value:function(){var e=this;this.setViewAddModal(!1);var t=new FormData;t.append("image",this.state.new_image_obj),t.append("category_name",this.state.new_category_title),k.a.post(M.api_base_url+"addCategory",t,M.axios_config).then((function(t){t.data.status?(u.b.success(t.data.message),e.setState({isLoading:!0}),e.setState({new_category_picture:"",new_category_title:""}),e.fetchAllCategories()):u.b.error(t.data.message)})).catch((function(e){u.b.error("Something went wrong!",e)}))}},{key:"getBase64",value:function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||u.b.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||u.b.error("Image must smaller than 2MB!"),t&&a}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories_data,n=t.isLoading,i=t.viewEditModal,r=t.viewDeleteModal,l=t.viewAddModal,o=s.a.createElement(E.a,{style:{fontSize:24},spin:!0}),c=this.state,u=c.loading,b=c.category_picture,k=c.category_title,M=c.category_id,S=c.new_category_picture,D=c.new_category_title,j=s.a.createElement("div",null,u?s.a.createElement(E.a,null):s.a.createElement(v.a,null),s.a.createElement("div",{style:{marginTop:8}},"Upload"));return s.a.createElement("div",null,s.a.createElement(g.a,null,s.a.createElement(m.a,{span:12},s.a.createElement("h2",{className:"title gx-mb-4"},"Categories"),s.a.createElement(h.a,{type:"primary",onClick:function(){return e.setViewAddModal(!0)}},"Add")),n?s.a.createElement(m.a,{span:24},s.a.createElement(p.a,{indicator:o})):s.a.createElement(m.a,{span:24},s.a.createElement("div",{className:"site-card-wrapper"},s.a.createElement(g.a,{gutter:16},a.map((function(t,a){return s.a.createElement(m.a,{span:6},s.a.createElement(d.a,{style:{width:300},cover:s.a.createElement("img",{alt:t.picture,src:t.picture,width:"300px",height:"125px"}),actions:[s.a.createElement(w.a,{key:"edit",onClick:function(){return e.handleEditCategory(t)}}),s.a.createElement(C.a,{key:"delete",onClick:function(){return e.handleDeleteCategory(t)}})]},s.a.createElement(A,{title:t.category_name})))})))))),s.a.createElement(y.a,{centered:!0,visible:i,footer:null,header:null,onCancel:function(){return e.setViewEditModal(!1)}},s.a.createElement(g.a,{gutter:16},s.a.createElement(m.a,{span:8},s.a.createElement(f.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:this.beforeUpload,onChange:this.handleChange},b?s.a.createElement("img",{src:b,alt:"avatar",style:{width:"100%"}}):j),s.a.createElement(_.a,{id:"cat_name",size:"large",placeholder:"Category Name",defaultValue:k,onChange:function(t){return e.setState({category_title:t.target.value})}}))),s.a.createElement("br",null),s.a.createElement("div",{className:"gx-card-list-footer"},s.a.createElement(h.a,{type:"primary",onClick:function(){return e.confirmEditCategory(M)}},"Update"),s.a.createElement(h.a,{onClick:function(){return e.setViewEditModal(!1)}},"Cancel"))),s.a.createElement(y.a,{centered:!0,visible:r,footer:null,header:null,onCancel:function(){return e.setViewDeleteModal(!1)}},s.a.createElement("p",{className:"gx-text-grey gx-mb-2"},"Are you sure you want to delete ",k,"?"),s.a.createElement("div",{className:"gx-card-list-footer"},s.a.createElement(h.a,{type:"primary",onClick:function(){return e.confirmDeleteCategory(M)}},"Yes"),s.a.createElement(h.a,{onClick:function(){return e.setViewDeleteModal(!1)}},"No"))),s.a.createElement(y.a,{centered:!0,visible:l,footer:null,header:null,onCancel:function(){return e.setViewAddModal(!1)}},s.a.createElement(g.a,{gutter:16},s.a.createElement(m.a,{span:8},s.a.createElement(f.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:this.beforeUpload,onChange:this.handleChangeAdd},S?s.a.createElement("img",{src:S,alt:"avatar",style:{width:"100%"}}):j),s.a.createElement(_.a,{size:"large",placeholder:"Category Name",defaultValue:D,onChange:function(t){return e.setState({new_category_title:t.target.value})}}))),s.a.createElement("br",null),s.a.createElement("div",{className:"gx-card-list-footer"},s.a.createElement(h.a,{type:"primary",onClick:function(){return e.confirmAddCategory()}},"Add"),s.a.createElement(h.a,{onClick:function(){return e.setViewAddModal(!1)}},"Cancel"))))}}]),a}(s.a.Component);t.default=S}}]);
//# sourceMappingURL=15.1ccd30c0.chunk.js.map