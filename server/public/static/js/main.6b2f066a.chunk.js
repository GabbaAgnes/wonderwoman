(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){e.exports=a(95)},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/photo2.e3683629.jpg"},92:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),r=a.n(i),l=a(12),c=a(2),s=a(3),p=a(5),h=a(4),m=a(6),u=(a(26),a(13)),d=a(97),g=(a(45),a(37)),y=a(15),f=a(11),E=(a(47),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("br",null),o.a.createElement("h4",{id:"explainAdding"},'To hatch a display to add to below collection with the above materials: simply click on your preferred paragraph, it will be automatically pasted inside of "Click to Hatch". ',o.a.createElement("br",null)," ",o.a.createElement("br",null),"Same with your choice of img/gif, click any and its url will be automatically pasted. ",o.a.createElement("br",null),'Once done, open "Click to Hatch" to "HATCH"',o.a.createElement("br",null)," \u2193 \u2193 \u2193 \u2193 \u2193 "),o.a.createElement("nav",null,o.a.createElement("a",{id:"clickAdd",onClick:this.props.onNewShowcase},"Click to Hatch")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",{id:"display"},"DISPLAYS"))}}]),t}(n.Component));E.defaultProps={onNewShowcase:function(){}};var v=E,b=a(16),w=(a(49),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={instructions:e.instructions,img:e.img,abletoDelete:!0},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({instructions:e.instructions}),this.setState({img:e.img})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(Object(y.a)({},this.state)),this.setState({instructions:"",img:"",abletoDelete:!0})}},{key:"render",value:function(){var e=this.state,t=(e.title,e.instructions),a=e.img,n=this.props.onClose;return o.a.createElement("div",{className:"recipe-form-container"},o.a.createElement("form",{className:"recipe-form",onSubmit:this.handleSubmit},o.a.createElement("button",{type:"button",className:"close-button",onClick:n},"X"),o.a.createElement("textarea",{className:"copiedInput",placeholder:"If you are seeing this, you haven not grabbed parent one yet!",key:"instructions",id:"recipe-instructions-input",type:"Instructions",name:"instructions",rows:"8",cols:"40",autoComplete:"off",value:t,onChange:this.handleChange}),o.a.createElement("div",{className:"recipe-form-line"},o.a.createElement("label",{id:"pasteUrl",htmlFor:"recipe-img-input"},"Paste Img/Gif Url"),o.a.createElement("input",{className:"copiedInput",id:"recipe-img-input",type:"text",placeholder:"",name:"img",value:a,size:36,autoComplete:"off",onChange:this.handleChange})),o.a.createElement("button",{type:"submit",className:"btn btn--wut is-active",style:{alignSelf:"flex-end",marginRight:0}},"HATCH")))}}]),t}(n.Component));w.defaultProps={onClose:function(){},onSave:function(){}};var k=w,M=(a(51),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this);var e=this.props,t=e.img,a=e.instructions,n=e._id,i=e.onDelete,r=e.abletoDelete;return console.log(r),o.a.createElement("div",{className:"recipe-card",id:"animated-shadow-quote"},o.a.createElement("div",{className:"recipe-card-content"},o.a.createElement("h4",null),o.a.createElement("p",null,a)),o.a.createElement("div",{className:"recipe-card-img"},o.a.createElement("img",{src:t})),r?o.a.createElement("button",{type:"button",onClick:function(){return i(n)}},"TERMINATE"):"")}}]),t}(n.Component)),O=(a(53),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.onDelete,t=this.props.showcases.map(function(t,a){return o.a.createElement(M,Object.assign({key:t._id},t,{onDelete:e}))});return o.a.createElement("div",{className:"recipe-list"},t)}}]),t}(n.Component)),j=(a(55),a(19)),T=a.n(j),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={showcases:[],showForm:!1},a.handleSave=a.handleSave.bind(Object(f.a)(Object(f.a)(a))),a.onDelete=a.onDelete.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://thinlyslicedplasticbag.herokuapp.com/get").then(function(t){console.log(t),e.setState({showcases:t.data.allEntries})})}},{key:"handleSave",value:function(e){var t=this;console.log(e),T.a.post("https://thinlyslicedplasticbag.herokuapp.com/add",{recipe:e}).then(function(a){console.log(a),t.setState(function(a,n){var o=Object(y.a)({},e,{id:t.state.nextRecipeId});return{nextRecipeId:a.nextRecipeId+1,showcases:[].concat(Object(g.a)(t.state.showcases),[o]),showForm:!1}})})}},{key:"onDelete",value:function(e){console.log(e),T.a.delete("https://thinlyslicedplasticbag.herokuapp.com/deleteCard",{data:{cardToDelete:e}}).then(function(e){console.log(e)});var t=this.state.showcases.filter(function(t){return t._id!==e});this.setState({showcases:t})}},{key:"render",value:function(){var e=this,t=this.state.showForm;return o.a.createElement("div",{className:"App"},o.a.createElement(v,{onNewShowcase:function(){return e.setState({showForm:!0})}}),t?o.a.createElement(k,{instructions:this.props.instructions,img:this.props.img,onSave:this.handleSave,onClose:function(){return e.setState({showForm:!1})}}):null,o.a.createElement(O,{onDelete:this.onDelete,showcases:this.state.showcases}))}}]),t}(n.Component),I=(a(75),function(e){function t(e){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{onClick:function(){e.props.copyTextMethod(e.props.copy)}},o.a.createElement("textarea",{id:"squareText",ref:function(t){return e.textArea=t},value:this.props.copy}))}}]),t}(o.a.Component)),C=(a(77),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"dialog-window"},o.a.createElement("div",{id:"scrollable-content"},o.a.createElement("div",{id:"animated-shadow-text"},o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Scroll down to read through the paragraghs "})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"There are three deeply entrenched assumptions we must conquer to live the way of the Essentialist: \u201cI have to,\u201d \u201cIt\u2019s all important,\u201d and \u201cI can do both.\u201d To embrace the essence of Essentialism requires we replace these assumptions with three core truth: \u201cI choose to,\u201d \u201cOnly a few things really matter,\u201d and \u201cI can do anything but not everything.\u201d These simple truths awaken us from our non-essential stupor."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Our highest priority is to protect our ability to prioritize. "})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"If the answer isn\u2019t a definite yes then it should be a no. An Essentialist uses narrow, explicit criteria like \u201cIs this exactly what I am looking for?\u201d"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Courage is grace under pressure. \u2014Ernest Hemingway"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"The deeper I have looked at the subject of Essentialism the more clearly I have seen courage as key to the process of elimination. Without courage, the disciplined pursuit of less is just lip service. It is just the stuff of one more dinner party conversation. It is skin deep."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Productivity in my experience consists of NOT doing anything that helps the work of other people but to spend all one\u2019s time on the work the Good Lord has fitted one to do, and to do well."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"When people ask us to do something, we can confuse the request with our relationship with them. Sometimes they seem so interconnected, we forget that denying the request is not the same as denying the person. Only once we separate the decision from the relationship can we make a clear decision and then separately find the courage and compassion to communicate it."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Essentialists accept they cannot be popular with everyone all of the time. Yes, saying no respectfully, reasonably, and gracefully can come at a short-term social cost. But part of living the way of the Essentialist is realizing respect is far more valuable than popularity in the long run."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Half of the troubles of this life can be traced to saying yes too quickly and not saying no soon enough. \u2014Josh billings"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Sunken-cost bias is the tendency to continue to invest time, money, or energy into something we know is a losing proposition simply because we have already incurred,, or sunk, a cost that cannot be recouped. But of course this can easily became a vicious cycle: the more we invest, the more determined we become to see it through and see our investment pay off. The more we invest in something, the harder it is to let go. An essentialist has the courage and confidence to admit his or her mistakes, no matter the sunk costs."})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Beware of the endowment effect, our tendency to undervalue things that aren\u2019t ours and to overvalue things because we already own them. A simple antidote to the endowment effect is don\u2019t ask, \u201cHow will I feel if i miss out on this opportunity?\u201d but rather, \u201cIf I did not have this opportunity, how much would I be willing to sacrifice in order to obtain it?\u201d"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"The Latin root of the word decision- cis or cid- literally means \u201cto cut\u201d or \u201cto kill.\u201d Every cut produces joy- maybe not in the moment but afterwards, when we realize that every additional moment we have gained can be spent on something better. That may be one reason why Stephen King has written, \u201cTo write is human, to edit is divine.\u201d"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"NO IS A COMPLETE SENTENCE. \u2014Anne Lamott Boundaries are a little like the walls of a sandcastle. The second we let one fall over, the rest of them come crashing down. "})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"If you don't prioritize your life, someone else will."})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Have you ever found yourself stretched too thin? Have you ever felt both overworked and underutilized? Do you ever feel busy but not productive? Like you're always in motion, but never getting anywhere?"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Once we accept the reality of trade-offs we stop asking, 'How can I make it all work?' and start asking the more honest question 'Which problem do I want to solve?'"})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"As poet Mary Oliver wrote:'Tell me, what is it you plan to do with your one wild and precious life?' I challenge you to pause more to ask yourself that question."})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"EACH NIGHT, WHEN I GO TO SLEEP, I DIE. AND THE NEXT MORNING, WHEN I WAKE UP, I AM REBORN. --Mahatma Gandhi"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"What if society stopped telling us to buy more stuff and instead allowed us to create more space to breath and think? What if society encouraged us to reject what has been accurately described as doing things we detest, to buy things we don't need, with money we don't have, to impress people we don't like? What if we stopped being oversold the value of having more and being undersold the value of having less? What if we stopped celebrating being busy as a measurement of importance? What if instead we celebrated how much time we have spent listening, pondering, meditating, and enjoy time with the most important people in our lives?"})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"It's critical to set aside time to take a breath, look around, and think. You need that level of clarity in order to innovate and grow. When I say focus, I don't mean simply picking a question or possibility and thinking about it obsessively. I mean creating the space to explore one hundred questions and possibilities. An Essentialist focuses the way our eye focus; not by fixating on something but by constantly adjusting and adapting to the field of vision."})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"Setting aside some time to put a little 'Think Week' into every day. One practice I've found useful is simply to read something from classic literature. It broadens my perspective and reminds me of themes and ideas that are essential enough to have withstood the test of time. There are myriad of options. Just make sure you select something that was written before our hyperconnected era and yet seems timeless."})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"The value of play in our lives can't be overstated. Play expands our minds in ways that allow us to explore: to generate new ideas or see old ideas in a new light. It makes us more inquisitive, more attuned to novelty, more engaged. It helps us challenge old assumptions and makes us more receptive to untested ideas. And play is an antidote to stress, because stress, in addition to being an enemy of productivity, can actually shut down the creative, inquisitive exploratory parts of the brain."})),o.a.createElement("br",null)," ",o.a.createElement("div",null,o.a.createElement(I,{copyTextMethod:this.props.copyTextMethod,copy:"The best asset we have for making a contribution to the world is ourselves. One of the most common ways people-especially ambitious, successful people- damage this asset is through lack of sleep. We need to be as strategic with ourselves as we are with our careers and our businesses. We need to pace ourselves, nurture ourselves, and give ourselves fuel to explore, thrive, and perform. Bill Clinton was quoted as saying that every major mistake he had made in his life had happened as a result of sleep deprivation."}))))),o.a.createElement("div",{className:"text"}))}}]),t}(n.Component)),S=(a(79),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"explainPicGif"},"Below is my collection of img/gif",o.a.createElement("br",null)," scroll up and down on the images to view collection. ",o.a.createElement("br",null)," \u21f5",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"horizontal-scroll-wrapper squares"},o.a.createElement("div",null),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/grace.png",alt:"grace"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/1.png",alt:"1"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/soon.png",alt:"soon"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/sunken.jpg",alt:"sunken"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/endow.gif",alt:"endow"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/6ee.gif",alt:"6ee"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/angel.jpg",alt:"angel"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/edit.png",alt:"edit"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/no.png",alt:"no"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/try6.gif",alt:"try6"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/11.png",alt:"also11"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/ty4.gif",alt:"ty4"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"https://media.giphy.com/media/pL434y7GW8Ru8/giphy.gif",alt:"giphy"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/2.jpg",alt:"2"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/5.png",alt:"5"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/6.png",alt:"6"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/7.png",alt:"7"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/8.png",alt:"8"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/9.png",alt:"9"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/10.png",alt:"10"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/11.jpg",alt:"11"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/sleep.png",alt:"sleep"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/reborn.png",alt:"reborn"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/pause.jpg",alt:"pause"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/whatif1.gif",alt:"whatif1"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/focus.gif",alt:"focus"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/read.jpg",alt:"read"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/play.jpg",alt:"play"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/tradeoff1.jpg",alt:"tradeoff1"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"./images/stretched.gif",alt:"stretched"})),o.a.createElement("div",{onClick:this.props.copyImageMethod},o.a.createElement("img",{src:"https://i-h1.pinimg.com/564x/12/3c/89/123c899c49333b96f0b052d3a82ee8b6.jpg",alt:"end"}))))}}]),t}(n.Component)),N=a(1),D=a.n(N),W=(a(83),a(33)),A=a.n(W);a(85);function H(){var e=Object(l.a)(["\n\tborder-radius: 3px;\n\tmargin-top: 8px;\n\tbox-sizing: border-box;\n\tvertical-align: middle;\n"]);return H=function(){return e},e}Array.prototype.chunk=function(e){var t,a=[],n=0;for(t=this.length/e;n<t;)a[n]=this.splice(0,e),n++;return a},Array.prototype.clone=function(){return this.slice(0)};var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).loadTrendingGifs=function(e){var t=a.state,n=t.giphyTrendingUrl,o=t.page;if(!t.loading){var i=n;e&&(i+="&offset="+e),a.setState({loading:!0}),fetch(i,{method:"get"}).then(function(e){return e.json()}).then(function(e){var t=e.data.map(function(e){return e.images}),n=!0,i=e.pagination;i.total_count<=i.count+i.offset&&(n=!1),a.setState({gifs:a.state.gifs.concat(t),page:o+1,loading:!1,hasMore:n})})}},a.searchGifs=function(e){var t=a.state,n=t.giphySearchUrl,o=t.searchValue,i=t.page,r=t.loading;if(!(o.length<1)&&!r){var l=n+"&q="+o.replace(" ","+");e&&(l+="&offset="+e),a.setState({loading:!0}),fetch(l,{method:"get"}).then(function(e){return e.json()}).then(function(e){var t=e.data.map(function(e){return e.images}),n=!0,o=e.pagination;o.total_count<=o.count+o.offset&&(n=!1),a.setState({gifs:a.state.gifs.concat(t),page:i+1,loading:!1,hasMore:n})})}},a.onGiphySelect=function(e){a.props.onSelected(e)},a.onSearchChange=function(e){var t=e.target.value;e.stopPropagation(),a.setState({searchValue:t,page:0,gifs:[]}),t?a.searchGifs():a.loadTrendingGifs()},a.onKeyDown=function(e){"Escape"===e.key&&(e.preventDefault(),a.reset())},a.reset=function(){a.setState({searchValue:""})},a.loadMore=function(){var e=a.state,t=e.searchValue,n=e.page,o=25*(Number(n+1)-1);t?a.searchGifs(o):a.loadTrendingGifs(o)},a.state={gifs:[],searchValue:"",loading:!1,hasMore:!0,giphySearchUrl:"https://api.giphy.com/v1/gifs/search?api_key=".concat(a.props.apiKey),giphyTrendingUrl:"https://api.giphy.com/v1/gifs/trending?api_key=".concat(a.props.apiKey),page:0},a.searchGifs=function(e,t){var a=null;return function(){var n=this,o=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,o)},t)}}(a.searchGifs,500),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadTrendingGifs()}},{key:"render",value:function(){var e=this,t=this.state,a=t.gifs,n=t.loading,i=t.hasMore,r=a.clone().chunk(9);return o.a.createElement("div",{className:"pickerWrapper"},o.a.createElement("div",{id:"giphyPickerWrapper",className:"giphy-picker"},o.a.createElement("input",{name:"giphy-search",type:"text",className:this.props.inputClassName,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",onChange:this.onSearchChange,value:this.state.searchValue,onKeyDown:this.onKeyDown,placeholder:this.props.placeholder}),o.a.createElement("div",{className:"giphyWrapper"},o.a.createElement(A.a,{loadMore:this.loadMore,hasMore:!n&&i,initialLoad:!1,useWindow:!1,threshold:700},!r.length&&n&&this.props.loader,o.a.createElement("div",{className:"giphyWrapperRow"},r.map(function(t,a){return o.a.createElement("div",{className:"giphyColumn",key:a},t.map(function(t,a){var n=t.fixed_width.url;return o.a.createElement(q,{key:a,style:{width:"100%",height:Number(t.fixed_width.height),backgroundColor:e.props.imagePlaceholderColor},src:n,onClick:function(){e.onGiphySelect(t)}})}))}))))),this.props.children)}}],[{key:"propTypes",get:function(){return{onSelected:D.a.func.isRequired,apiKey:D.a.string,loader:D.a.element,placeholder:D.a.string,imagePlaceholderColor:D.a.string,inputClassName:D.a.string,children:D.a.element}}},{key:"defaultProps",get:function(){return{apiKey:"IFi4RzT7NxvWjFC845z185zLEwjfObX5",placeholder:"Search Gifs...",imagePlaceholderColor:"#E3E3E3",loader:o.a.createElement("p",null,"Loading...")}}}]),t}(n.Component),q=u.a.img(H());function P(){var e=Object(l.a)(['\n    \n    background-image: url("https://images.unsplash.com/photo-1505835045737-a37cf2e93876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80");\n    width: 100%;\n    height: 1000px;\n    top:0;\n    background-size: ',";\n    background-attachment: fixed;\n    background-position: center;\n   \n    visibility: ","\n"]);return P=function(){return e},e}var L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={stateful:!0,top:"100px",disappear:!1,instructions:"",img:""},a.copyTextMethod=function(e){console.log(e),a.setState({instructions:e})},a.copyImageMethod=function(e){console.log(e.target.src),a.setState({img:e.target.src})},a.selectImage=function(e){console.log("gif",e),a.setState({img:e.original.url})},a.handleScroll=function(){a.setState({top:window.scrollY+"px"}),window.scrollY>1e3?a.setState({disappear:!0}):a.setState({disappear:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement("div",{className:"homewrapper"},o.a.createElement(R,{top:this.state.top,disappear:this.state.disappear},o.a.createElement(d.a,null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"explainShowcase"},"Below paragraghs are taken from the book in no particular order; please take some time to read through.",o.a.createElement("div",null,"\u2193 \u2193 \u2193 \u2193 \u2193"),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(C,{copyTextMethod:this.copyTextMethod}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(S,{copyImageMethod:this.copyImageMethod}),o.a.createElement("div",{className:"explainShowcase"},"Or find a GIF of your choice"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(G,{onSelected:this.selectImage})),o.a.createElement(x,{instructions:this.state.instructions,img:this.state.img})," ",o.a.createElement("br",null))}}]),t}(n.Component),R=u.a.div(P(),function(e){return e.top||"1px"},function(e){return e.disappear,"show"}),z=L,B=(a(89),a(91),a(96)),K=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"scallop-up"}),o.a.createElement("div",{className:"colour-block"},o.a.createElement("div",{className:"line"},o.a.createElement("p",{className:"red"},o.a.createElement("br",null),"A WEBSITE DEDICATED TO THOSE WHO HAVE NOT READ THE BOOK:",o.a.createElement("br",null),o.a.createElement("br",null),"Inspirational knowledge from Greg Mckeown\u2019s book ",o.a.createElement("br",null),"'Essentialism-The disciplined Pursuit of Less' ",o.a.createElement("br",null),"combined with groovy artworks.",o.a.createElement("br",null)," \u2193",o.a.createElement("br",null)," \u2193"))),o.a.createElement("div",{class:"scallop-down"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Click below creature to discover content of the book"),o.a.createElement(B.a,{to:"/home",onClick:function(){window.scrollTo(0,0)}},o.a.createElement("img",{className:"shake-slow shake-constant shake-constant--hover",border:"0",alt:"landingImage",src:"./images/hello.png",width:"100",height:"100"}))))}}]),t}(n.Component),F=(a(92),a(99)),_=a(98);function U(){var e=Object(l.a)(["\n   \n"]);return U=function(){return e},e}var V=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"nav-style"},o.a.createElement("ul",{className:"slide"},o.a.createElement(J,null,o.a.createElement(B.a,{to:"/"},o.a.createElement("img",{border:"0",alt:"landingImage",src:"./images/101.jpg",width:"100",height:"100"})),o.a.createElement("div",{id:"topInstruction"},"SCROLL DOWN")))),o.a.createElement(F.a,null,o.a.createElement(_.a,{exact:!0,path:"/",component:K}),o.a.createElement(_.a,{path:"/home",component:z}))))}}]),t}(n.Component),J=u.a.div(U()),Y=V;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.6b2f066a.chunk.js.map