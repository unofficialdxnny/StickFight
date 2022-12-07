var gdjs;(function(r){class o{constructor(){this.tasksWithCallback=new Array}processTasks(e){for(let s=0;s<this.tasksWithCallback.length;s++){const i=this.tasksWithCallback[s];i.asyncTask.update(e)&&(i.callback(e),this.tasksWithCallback.splice(s--,1))}}addTask(e,s){this.tasksWithCallback.push({asyncTask:e,callback:s})}clearTasks(){this.tasksWithCallback.length=0}}r.AsyncTasksManager=o;class t{}r.AsyncTask=t;class c extends t{constructor(){super(...arguments);this.tasks=new Array}addTask(e){this.tasks.push(e)}update(e){for(let s=0;s<this.tasks.length;s++)this.tasks[s].update(e)&&this.tasks.splice(s--,1);return this.tasks.length===0}}r.TaskGroup=c;class l extends t{update(){return!0}}r.ResolveTask=l;const n=new r.Logger("Internal PromiseTask");class k extends t{constructor(e){super();this.isResolved=!1;this.promise=e.catch(s=>{n.error(`A promise error has not been handled, this should never happen!
If you are using JavaScript promises in an asynchronous action, make sure to add a .catch().
Otherwise, report this as a bug on the GDevelop forums!
${s?"The following error was thrown: "+s:""}`)}).then(()=>{this.isResolved=!0})}update(){return this.isResolved}}r.PromiseTask=k})(gdjs||(gdjs={}));
//# sourceMappingURL=AsyncTasksManager.js.map
// Error message thrown during startup (if any)/..
