/*
* @Author: Administrator
* @Date:   2018-01-28 12:33:48
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-01 00:59:24
*/
// 
window.onload=function () {
    let div=document.querySelector('.banner');
    let banner=document.querySelectorAll('.banner1 li');
    let left=document.querySelector('.banner_jiantou_left');
    let right=document.querySelector('.banner_jiantou_right');
    let dian=document.querySelectorAll('.banner_dian li')
    let n=0;
    function move() {
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=banner.length-1;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
    }
    dian.forEach(function(val,ind){
        val.onclick=function(){
            dian.forEach(function(i,j){
                i.classList.remove('active')
                banner[n].classList.remove('active')
            })
            this.classList.add('active');
            banner[ind].classList.add('active');
            n=ind;
        }
    })

    // 侧导航选项卡
    let cenav=document.querySelectorAll('.ce_nav li');
    let navhid=document.querySelectorAll('.hidden li');
    cenav.forEach(function(val,ind){
    val.onmouseover=function(){
        cenav.forEach(function(value,j){
            value.classList.remove('active')
            navhid[j].classList.remove('active')
    })
        cenav[ind].classList.add('active')
        navhid[ind].classList.add('active')
    }
    val.onmouseout=function(){
        navhid[ind].classList.remove('active')
        cenav[ind].classList.remove('active')
    }
    navhid[ind].onmouseover=function(){
        navhid[ind].classList.add('active')
    }
    navhid[ind].onmouseout=function(){
        navhid[ind].classList.remove('active')
    }
})
    // cenav.forEach(function(val,index){
    //     val.onclick=function(){
    //         cenav.forEach(function(dom,index){
    //             dom.className='';
    //         })
    //         this.className='active';
    //         navhid.forEach(function(val,index){
    //             val.className="";
    //         })
    //         navhid[index].className='active';
    //     }
    // })

    // 明星单品轮播
    let x=0;
    let y=0;
    let mxbig=document.querySelector('.start');
    let start=document.querySelectorAll('.danpin_list');
    let kuan=parseInt(getComputedStyle(mxbig,null).width);
    let mxz=document.querySelector('.danpin_right1');
    let mxy=document.querySelector('.danpin_right2');
    // function mxmove(){
    //     y=x+1;
    //     if(y>=start.length){
    //         y=0;
    //     }
    //     start[y].style.left="100%";
    //     animate(start[x],{left:-kuan});
    //     animate(start[y],{left:0});
    //     x=y;
    // }
    // tt=setInterval(mxmove,5000);
    mxz.onclick=function(){
        y=x-1;
        if(y<0){
            y=start.length-1;
        }
        start[y].style.left="100%";
        animate(start[x],{left:-kuan});
        animate(start[y],{left:0});
        x=y;
    }
    mxy.onclick=function(){
        y=x+1;
        if(y>=start.length){
            y=0;
        }
        start[y].style.left="100%";
        animate(start[x],{left:-kuan});
        animate(start[y],{left:0});
        x=y;
    }





    // 内容轮播，平移
    function nrlb(nr){
    let now=0;
    let next=0;
    let content=nr.querySelectorAll('.neirong_bottom_1')
    let width=parseInt(getComputedStyle(nr,null).width);
    let nrleft=nr.querySelector('.xiaoleft');
    let nrright=nr.querySelector('.xiaoright');
    let nrdian=nr.querySelectorAll('.lunbo a');
    // function nrmove(){
    //     next=now+1;
    //     if(next>=content.length){
    //         next=0;
    //     }
    //     content[next].style.left="100%";
    //     animate(content[now],{left:-width});
    //     animate(content[next],{left:0});
    //     nrdian[now].classList.remove('dbh');
    //     nrdian[next].classList.add('dbh')
    //     now=next;
    // }
    // t=setInterval(nrmove,5000)
    // nr.onmouseover=function(){
    //     clearInterval(t);
    // }
    // nr.onmouseout=function(){
    //     t=setInterval(nrmove,5000);
    // }
    nrleft.onclick=function(){
        next=now-1;
        if(next<0){
            next=content.length-1;
        }
        content[next].style.left="-100%";
        animate(content[now],{left:width});
        animate(content[next],{left:0});
        nrdian[now].classList.remove('dbh');
        nrdian[next].classList.add('dbh')
        now=next;
    }
    nrright.onclick=function(){
        next=now+1;
        if(next>=content.length){
            next=0;
        }
        content[next].style.left="100%";
        animate(content[now],{left:-width});
        animate(content[next],{left:0});
        nrdian[now].classList.remove('dbh');
        nrdian[next].classList.add('dbh')
        now=next;
    }
    nrdian.forEach(function(i,j){
        i.onclick=function(){
            if(j<now){
                next=j;
                content[next].style.left="-100%";
                animate(content[now],{left:width});
                animate(content[next],{left:0});
                nrdian[now].classList.remove('dbh');
                nrdian[next].classList.add('dbh')
                now=next; 
            }else if(j>now){
                next=j;
                content[next].style.left="100%";
                animate(content[now],{left:-width});
                animate(content[next],{left:0});
                nrdian[now].classList.remove('dbh');
                nrdian[next].classList.add('dbh')
                now=next;
            }
        }
        
    })
    }
    let nrs=document.querySelectorAll('.neirong_bot');
    nrs.forEach(function(value){
        nrlb(value);
    });




 function change(a,b) {
        let chose=document.querySelectorAll(a);
        let main=document.querySelectorAll(b);
        chose.forEach(function (dom,index) {
            dom.onmouseover=function () {
                chose.forEach(function (val,ind) {
                    val.classList.remove('active_');
                    main[ind].classList.remove('active_');
                })
                this.classList.add('active_');
                main[index].classList.add('active_');
            }
        })
        
    }
    change('.box1 .box1_top .box1_right1 .box1_right','.box1 .box1_bottom .box1_2');
    change('.box1zn .box1_top .box1_right1 .box1_right','.box1zn .box1_bottom .box1_2');
    change('.box1nn .box1_top .box1_right1 .box1_right','.box1nn .box1_bottom .box1_2');
    change('.box1hh .box1_top .box1_right1 .box1_right','.box1hh .box1_bottom .box1_2');
    change('.box1gg .box1_top .box1_right1 .box1_right','.box1gg .box1_bottom .box1_2');


}


