dqweb = {
	defaultServer : "localhost:5000",
	shareUrl      : "https://adotsch.github.io/dqweb/share.html",
	qwords        : ".Q.A,.Q.Cf,.Q.D,.Q.D,.Q.M,.Q.MAP,.Q.P,.Q.PD,.Q.PV,.Q.V,.Q.Xf,.Q.a,.Q.addmonths,.Q.addr,.Q.b6,.Q.bt,.Q.btoa,.Q.bv,.Q.chk,.Q.cn,.Q.dd,.Q.def,.Q.dpft,.Q.dpfts,.Q.dsftg,.Q.en,.Q.ens,.Q.f,.Q.ff,.Q.fk,.Q.fmt,.Q.fpsfpn,.Q.fsfsn,.Q.ft,.Q.fu,.Q.gc,.Q.gz,.Q.hdpf,.Q.hg,.Q.host,.Q.hp,.Q.id,.Q.ind,.Q.j10,.Q.j12,.Q.k,.Q.l,.Q.nA,.Q.opt,.Q.par,.Q.pd,.Q.pf,.Q.pn,.Q.pt,.Q.pv,.Q.qp,.Q.qp,.Q.qt,.Q.qt,.Q.res,.Q.s,.Q.s1,.Q.sbt,.Q.trp,.Q.ts,.Q.ty,.Q.u,.Q.u,.Q.v,.Q.view,.Q.vp,.Q.w,.Q.x,.Q.x10,.Q.x12,"+
					"ajf0,asof,attr,avgs,ceiling,cols,count,cross,delete,deltas,desc,differ,distinct,dsave,each,eval,except,fills,first,fkeys,flip,floor,from,group,gtime,hclose,hcount,hdel,hsym,iasc,idesc,inter,keys,load,lower,ltime,ltrim,mavg,maxs,mcount,mdev,meta,mins,mmax,mmin,msum,next,null,over,parse,peach,prds,prev,prior,rand,rank,ratios,raze,read0,read1,reciprocal,reval,reverse,rload,rotate,rsave,rtrim,save,scan,scov,sdev,select,show,signum,string,sublist,sums,svar,system,tables,trim,type,ungroup,union,update,upper,upsert,value,view,views,where,xasc,xbar,xcol,xcols,xdesc,xgroup,xkey,xlog,xprev,xrank",
	trashSize     : 25,
	demo          : "//Please read all the comments and execute all the queries below to get started with DQWEB!\n\n//@TITLE Set the title by pressing Ctrl+Enter\n//@SERVER localhost:5000  <--- set the server, it is effective below the comment\n\n//Execute it on the server you set above by pressing Ctrl+Enter\n.Q.w[]\n\n//@SERVER localhost:5001  <--- you can have multiple of these, it alwasy overrides the previous one\n\n//@WARN You are overwriting loggerFunc here!\nloggerFunc:{0N!x}\n\n//@FILE dummy.csv         <--- this is how you export your data\n([]sym:100?`3;time:08:00+asc 100?10:00:00.000;price:100?100f)\n\n//@WARN Saving down a big file!   /--- You can combine @WARN and @FILE\n//@FILE big.csv                   \\--- right above the query\n{[N]([]sym:N?`3;time:08:00+asc N?10:00:00.000;price:N?100f)}[10000000]\n\n\n//Now, you can press Ctrl+s to share this code with others.\n//Alternatively, you can export all your code and layout by clicking \"EXPORT\" on the menu bar."
}


