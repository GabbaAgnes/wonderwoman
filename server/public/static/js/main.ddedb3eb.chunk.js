(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,a){e.exports=a.p+"static/media/photo2.e3683629.jpg"},41:function(e,t,a){e.exports=a(96)},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(15),r=a.n(i),s=a(13),c=a(2),l=a(3),u=a(6),h=a(4),p=a(5),m=(a(16),a(14)),d=a(98),f=(a(47),a(20)),g=a(17),b=a(8),y=(a(49),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("br",null),o.a.createElement("h2",{id:"explainAdding",className:"shake-little shake-constant shake-constant--hover"},"In case you would like to enrich the content of this page."),o.a.createElement("nav",{className:"shake-slow shake-constant shake-constant--hover"},o.a.createElement("a",{id:"clickAdd",onClick:this.props.onNewShowcase},"Click to Add A New Showcase to The collection Above")))}}]),t}(n.Component));y.defaultProps={onNewShowcase:function(){}};var v=y,E=a(12),w=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={instructions:e.instructions,points:[""],img:"",abletoDelete:!0},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleNewPoint=a.handleNewPoint.bind(Object(b.a)(Object(b.a)(a))),a.handleChangeIng=a.handleChangeIng.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({instructions:e.instructions})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleNewPoint",value:function(e){var t=this.state.points;this.setState({points:[].concat(Object(f.a)(t),[""])})}},{key:"handleChangeIng",value:function(e){var t=Number(e.target.name.split("-")[1]),a=this.state.points.map(function(a,n){return n===t?e.target.value:a});this.setState({points:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(Object(g.a)({},this.state)),this.setState({instructions:"",points:[""],img:"",abletoDelete:!0})}},{key:"render",value:function(){var e,t=this.state,a=(t.title,t.instructions),n=t.img,i=(t.points,this.props.onClose);return o.a.createElement("div",{className:"recipe-form-container"},o.a.createElement("form",{className:"recipe-form",onSubmit:this.handleSubmit},o.a.createElement("button",{type:"button",className:"close-button",onClick:i},"X"),o.a.createElement("label",{htmlFor:"recipe-instructions-input",style:{marginTop:"5px"}}),o.a.createElement("textarea",{placeholder:"Click on the text in the squares below to copy!",key:"instructions",id:"recipe-instructions-input",type:"Instructions",name:"instructions",rows:"8",cols:"40",autoComplete:"off",value:a,onChange:this.handleChange}),o.a.createElement("div",{className:"recipe-form-line"},o.a.createElement("label",{className:"shake-slow shake-constant shake-constant--hover",htmlFor:"recipe-img-input"},"Paste An Image Url"),o.a.createElement("input",(e={placeholder:"Any img or gif address!",id:"recipe-img-input",type:"text"},Object(E.a)(e,"placeholder",""),Object(E.a)(e,"name","img"),Object(E.a)(e,"value",n),Object(E.a)(e,"size",36),Object(E.a)(e,"autoComplete","off"),Object(E.a)(e,"onChange",this.handleChange),e))),o.a.createElement("button",{type:"submit",className:"buttons",style:{alignSelf:"flex-end",marginRight:0}},"SAVE")))}}]),t}(n.Component));w.defaultProps={onClose:function(){},onSave:function(){}};var k=w,j=(a(53),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log(this);var e=this.props,t=e.img,a=e.instructions,n=e._id,i=e.onDelete,r=e.abletoDelete;return console.log(r),o.a.createElement("div",{className:"recipe-card",id:"animated-shadow-quote"},o.a.createElement("div",{className:"recipe-card-content"},o.a.createElement("h4",null),o.a.createElement("p",null,a)),o.a.createElement("div",{className:"recipe-card-img"},o.a.createElement("img",{src:t})),r?o.a.createElement("button",{type:"button",onClick:function(){return i(n)}},"DELETE"):"")}}]),t}(n.Component)),O=(a(55),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onDelete,t=this.props.showcases.map(function(t,a){return o.a.createElement(j,Object.assign({key:t._id},t,{onDelete:e}))});return o.a.createElement("div",{className:"recipe-list"},t)}}]),t}(n.Component)),x=(a(57),a(21)),C=a.n(x),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={showcases:[{instructions:"Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",points:["pasta","8 cups water","1 box spaghetti"],img:"./images/1.png"},{instructions:"Combine ice cream and milk.  Blend until creamy",points:["2 Scoops Ice cream","8 ounces milk"],img:"https://i-h1.pinimg.com/564x/16/3e/76/163e769f56ea106011732092480bd7b9.jpg"}],showForm:!1},a.handleSave=a.handleSave.bind(Object(b.a)(Object(b.a)(a))),a.onDelete=a.onDelete.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://thinlyslicedplasticbag.herokuapp.com/get").then(function(t){console.log(t),e.setState({showcases:t.data.allEntries})})}},{key:"handleSave",value:function(e){var t=this;console.log(e),C.a.post("https://thinlyslicedplasticbag.herokuapp.com/add",{recipe:e}).then(function(a){console.log(a),t.setState(function(a,n){var o=Object(g.a)({},e,{id:t.state.nextRecipeId});return{nextRecipeId:a.nextRecipeId+1,showcases:[].concat(Object(f.a)(t.state.showcases),[o]),showForm:!1}})})}},{key:"onDelete",value:function(e){console.log(e),C.a.delete("https://thinlyslicedplasticbag.herokuapp.com/deleteCard",{data:{cardToDelete:e}}).then(function(e){console.log(e)});var t=this.state.showcases.filter(function(t){return t._id!==e});this.setState({showcases:t})}},{key:"render",value:function(){var e=this,t=this.state.showForm;return o.a.createElement("div",{className:"App"},o.a.createElement(O,{onDelete:this.onDelete,showcases:this.state.showcases}),o.a.createElement(v,{onNewShowcase:function(){return e.setState({showForm:!0})}}),t?o.a.createElement(k,{instructions:this.props.instructions,onSave:this.handleSave,onClose:function(){return e.setState({showForm:!1})}}):null)}}]),t}(n.Component),S=(a(77),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{onClick:function(){e.props.copyTextMethod(e.props.copy)}},document.queryCommandSupported("copy")&&o.a.createElement("div",{className:"surroundingCopy"},this.state.copySuccess),o.a.createElement("textarea",{className:"squareText",ref:function(t){return e.textArea=t},value:this.props.copy}))}}]),t}(o.a.Component)),N=(a(79),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"horizontal-scroll-wrapper texts"},o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"There are three deeply entrenched assumptions we must conquer to live the way of the Essentialist: \u201cI have to,\u201d \u201cIt\u2019s all important,\u201d and \u201cI can do both.\u201d To embrace the essence of Essentialism requires we replace these assumptions with three core truth: \u201cI choose to,\u201d \u201cOnly a few things really matter,\u201d and \u201cI can do anything but not everything.\u201d These simple truths awaken us from our non-essential stupor."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Our highest priority is to protect our ability to prioritize. "})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"If the answer isn\u2019t a definite yes then it should be a no. An Essentialist uses narrow, explicit criteria like \u201cIs this exactly what I am looking for?\u201d"})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Courage is grace under pressure. \u2014Ernest Hemingway"})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"The deeper I have looked at the subject of Essentialism the more clearly I have seen courage as key to the process of elimination. Without courage, the disciplined pursuit of less is just lip service. It is just the stuff of one more dinner party conversation. It is skin deep."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Productivity in my experience consists of NOT doing anything that helps the work of other people but to spend all one\u2019s time on the work the Good Lord has fitted one to do, and to do well."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"When people ask us to do something, we can confuse the request with our relationship with them. Sometimes they seem so interconnected, we forget that denying the request is not the same as denying the person. Only once we separate the decision from the relationship can we make a clear decision and then separately find the courage and compassion to communicate it."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Essentialists accept they cannot be popular with everyone all of the time. Yes, saying no respectfully, reasonably, and gracefully can come at a short-term social cost. But part of living the way of the Essentialist is realizing respect is far more valuable than popularity in the long run."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Half of the troubles of this life can be traced to saying yes too quickly and not saying no soon enough. \u2014Josh billings"})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Sunken-cost bias is the tendency to continue to invest time, money, or energy into something we know is a losing proposition simply because we have already incurred,, or sunk, a cost that cannot be recouped. But of course this can easily became a vicious cycle: the more we invest, the more determined we become to see it through and see our investment pay off. The more we invest in something, the harder it is to let go. An essentialist has the courage and confidence to admit his or her mistakes and uncommit, no matter the sunk costs."})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"Beware of the endowment effect, our tendency to undervalue things that aren\u2019t ours and to overvalue things because we already own them. A simple antidote to the endowment effect is don\u2019t ask, \u201cHow will I feel if i miss out on this opportunity?\u201d but rather, \u201cIf I did not have this opportunity, how much would I be willing to sacrifice in order to obtain it?\u201d"})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"The Latin root of the word decision- cis or cid- literally means \u201cto cut\u201d or \u201cto kill.\u201d Every cut produces joy- maybe not in the moment but afterwards, when we realize that every additional moment we have gained can be spent on something better. That may be one reason why Stephen King has written, \u201cTo write is human, to edit is divine.\u201d"})),o.a.createElement("div",null,o.a.createElement(S,{copyTextMethod:this.props.copyTextMethod,copy:"NO IS A COMPLETE SENTENCE. \u2014Anne Lamott Boundaries are a little like the walls of a sandcastle. The second we let one fall over, the rest of them come crashing down. "}))),o.a.createElement("div",null,o.a.createElement("div",{className:"horizontal-scroll-wrapper squares"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))))}}]),t}(n.Component)),M=a(1),I=a.n(M),D=(a(83),a(35)),A=a.n(D);a(85);function P(){var e=Object(s.a)(["\n\tborder-radius: 3px;\n\tmargin-top: 8px;\n\tbox-sizing: border-box;\n\tvertical-align: middle;\n"]);return P=function(){return e},e}Array.prototype.chunk=function(e){var t,a=[],n=0;for(t=this.length/e;n<t;)a[n]=this.splice(0,e),n++;return a},Array.prototype.clone=function(){return this.slice(0)};var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).loadTrendingGifs=function(e){var t=a.state,n=t.giphyTrendingUrl,o=t.page;if(!t.loading){var i=n;e&&(i+="&offset="+e),a.setState({loading:!0}),fetch(i,{method:"get"}).then(function(e){return e.json()}).then(function(e){var t=e.data.map(function(e){return e.images}),n=!0,i=e.pagination;i.total_count<=i.count+i.offset&&(n=!1),a.setState({gifs:a.state.gifs.concat(t),page:o+1,loading:!1,hasMore:n})})}},a.searchGifs=function(e){var t=a.state,n=t.giphySearchUrl,o=t.searchValue,i=t.page,r=t.loading;if(!(o.length<1)&&!r){var s=n+"&q="+o.replace(" ","+");e&&(s+="&offset="+e),a.setState({loading:!0}),fetch(s,{method:"get"}).then(function(e){return e.json()}).then(function(e){var t=e.data.map(function(e){return e.images}),n=!0,o=e.pagination;o.total_count<=o.count+o.offset&&(n=!1),a.setState({gifs:a.state.gifs.concat(t),page:i+1,loading:!1,hasMore:n})})}},a.onGiphySelect=function(e){a.props.onSelected(e)},a.onSearchChange=function(e){var t=e.target.value;e.stopPropagation(),a.setState({searchValue:t,page:0,gifs:[]}),t?a.searchGifs():a.loadTrendingGifs()},a.onKeyDown=function(e){"Escape"===e.key&&(e.preventDefault(),a.reset())},a.reset=function(){a.setState({searchValue:""})},a.loadMore=function(){var e=a.state,t=e.searchValue,n=e.page,o=25*(Number(n+1)-1);t?a.searchGifs(o):a.loadTrendingGifs(o)},a.state={gifs:[],searchValue:"",loading:!1,hasMore:!0,giphySearchUrl:"https://api.giphy.com/v1/gifs/search?api_key=".concat(a.props.apiKey),giphyTrendingUrl:"https://api.giphy.com/v1/gifs/trending?api_key=".concat(a.props.apiKey),page:0},a.searchGifs=function(e,t){var a=null;return function(){var n=this,o=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,o)},t)}}(a.searchGifs,500),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadTrendingGifs()}},{key:"render",value:function(){var e=this,t=this.state,a=t.gifs,n=t.loading,i=t.hasMore,r=a.clone().chunk(9);return o.a.createElement("div",{className:"pickerWrapper"},o.a.createElement("div",{id:"giphyPickerWrapper",className:"giphy-picker"},o.a.createElement("input",{name:"giphy-search",type:"text",className:this.props.inputClassName,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",onChange:this.onSearchChange,value:this.state.searchValue,onKeyDown:this.onKeyDown,placeholder:this.props.placeholder}),o.a.createElement("div",{className:"giphyWrapper"},o.a.createElement(A.a,{loadMore:this.loadMore,hasMore:!n&&i,initialLoad:!1,useWindow:!1,threshold:700},!r.length&&n&&this.props.loader,o.a.createElement("div",{className:"giphyWrapperRow"},r.map(function(t,a){return o.a.createElement("div",{className:"giphyColumn",key:a},t.map(function(t,a){var n=t.fixed_width.url;return o.a.createElement(W,{key:a,style:{width:"100%",height:Number(t.fixed_width.height),backgroundColor:e.props.imagePlaceholderColor},src:n,onClick:function(){e.onGiphySelect(t)}})}))}))))),this.props.children)}}],[{key:"propTypes",get:function(){return{onSelected:I.a.func.isRequired,apiKey:I.a.string,loader:I.a.element,placeholder:I.a.string,imagePlaceholderColor:I.a.string,inputClassName:I.a.string,children:I.a.element}}},{key:"defaultProps",get:function(){return{apiKey:"IFi4RzT7NxvWjFC845z185zLEwjfObX5",placeholder:"If you want to use Gifs...",imagePlaceholderColor:"#E3E3E3",loader:o.a.createElement("p",null,"Loading...")}}}]),t}(n.Component),W=m.a.img(P()),q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"log",value:function(e){console.log(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(G,{onSelected:this.log.bind(this)}))}}]),t}(n.Component);function L(){var e=Object(s.a)(['\n    \n    background-image: url("https://images.unsplash.com/photo-1505835045737-a37cf2e93876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80");\n    width: 100%;\n    height: 1000px;\n    top:0;\n    background-size: ',";\n    background-attachment: fixed;\n    background-position: center;\n   \n    visibility: ","\n"]);return L=function(){return e},e}var z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={stateful:!0,top:"100px",disappear:!1,instructions:""},a.copyTextMethod=function(e){console.log(e),a.setState({instructions:e})},a.handleScroll=function(){a.setState({top:window.scrollY+"px"}),window.scrollY>1e3?a.setState({disappear:!0}):a.setState({disappear:!1})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement("div",{className:"homewrapper"},o.a.createElement(B,{top:this.state.top,disappear:this.state.disappear},o.a.createElement(d.a,null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"explainShowcase"},"Take a deep breath and check out below showcases with chucks of knowledge from the book."),o.a.createElement(T,{instructions:this.state.instructions})," ",o.a.createElement("br",null),o.a.createElement(N,{copyTextMethod:this.copyTextMethod}),o.a.createElement("h2",{className:"explainShowcase"},"If you're not feeling the images above, search for a gif below."),o.a.createElement(q,null))}}]),t}(n.Component),B=m.a.div(L(),function(e){return e.top||"1px"},function(e){return e.disappear,"show"}),F=z,_=(a(89),a(91),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={title:"WELCOME AND LET'S GET IT",description:"Inspirational knowledge from Greg Mckeown\u2019s book 'Essentialism-The disciplined Pursuit of Less' combined with groovy artworks."},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"modal","data-status":this.props.status},o.a.createElement("div",{className:"modal-left"},o.a.createElement("span",{className:"price-tag"},this.state.price)),o.a.createElement("div",{className:"modal-right"},o.a.createElement("h2",null,this.state.title),o.a.createElement("p",null,this.state.description),o.a.createElement("button",{onClick:this.props.onModalClick,className:"close"},o.a.createElement("span",{className:"fa fa-close"})))))}}]),t}(n.Component)),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={status:!1},a.modalToggle=function(){a.setState({status:!a.state.status}),console.log("hello")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"place-order",onClick:this.modalToggle},o.a.createElement("span",{className:"fa fa-shopping-cart"})),o.a.createElement(_,{onModalClick:this.modalToggle,status:this.state.status}))}}]),t}(n.Component),R=a(38),V=a.n(R),U=a(26),H=a.n(U),J=a(97),Y={backgroundImage:"url(".concat(V.a,")")},X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",{id:"boldWords",className:"shake-little shake-constant shake-constant--hover"},"Click the dude to begin"),o.a.createElement(K,null),o.a.createElement("section",{className:"usethis",style:Y},o.a.createElement("div",{className:"Landing"}),o.a.createElement("div",{className:"scallop-up"}),o.a.createElement("div",{className:"colour-block"},o.a.createElement("div",{className:"line"},o.a.createElement("p",{className:"red"},o.a.createElement(H.a,null,o.a.createElement("br",null),"The way of the Essentialist means living",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(H.a.Delay,{ms:5e3}),"by design, not by default. Instead of making ",o.a.createElement("br",null),o.a.createElement("br",null),"choices reactively,the Essentialist deliberately",o.a.createElement("br",null)," ",o.a.createElement("br",null),"distinguishes the vital few from the trivial many.",o.a.createElement("br",null),o.a.createElement("br",null),"It is about making the wisest possible investment",o.a.createElement("br",null),o.a.createElement("br",null),"of your time and energy in order to operate at your",o.a.createElement("br",null),o.a.createElement("br",null),"highest point of contribution by doing only what is ",o.a.createElement("br",null),o.a.createElement("br",null),"essential.")))),o.a.createElement("div",{class:"scallop-down"}),o.a.createElement("div",null,o.a.createElement("h4",null,"Enter Main Page"),o.a.createElement(J.a,{to:"/home",onClick:function(){window.scrollTo(0,0)}},o.a.createElement("img",{className:"shake-slow shake-constant shake-constant--hover",border:"0",alt:"landingImage",src:"./images/hello.png",width:"100",height:"100"})))))}}]),t}(n.Component),Q=(a(93),a(100)),$=a(99);function Z(){var e=Object(s.a)(["\n   \n"]);return Z=function(){return e},e}var ee=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"nav-style"},o.a.createElement("ul",{className:"slide"},o.a.createElement(te,null,o.a.createElement(J.a,{to:"/"},o.a.createElement("img",{className:"shake-slow shake-constant shake-constant--hover",border:"0",alt:"landingImage",src:"./images/101.jpg",width:"100",height:"100"}))))),o.a.createElement(Q.a,null,o.a.createElement($.a,{exact:!0,path:"/",component:X}),o.a.createElement($.a,{path:"/home",component:F}))))}}]),t}(n.Component),te=m.a.div(Z()),ae=ee;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.ddedb3eb.chunk.js.map