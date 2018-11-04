var express = require("express");
var path = require("path");

var friendsArray = [

    {
        nameValue: "Jenny L.",
        imageURL: "http://runwayriot.com/wp-content/uploads/2016/08/GettyImages-532017884.jpg",
        answerArray: [5, 3, 5, 5, 3, 4, 5, 3, 5, 3]
    },
    {
        nameValue: "David S.",
        imageURL: "http://hollywoodneuz.us/wp-content/uploads/2013/08/Tom-Hardy-1-787x1024.jpg",
        answerArray: [2, 3, 5, 5, 2, 3, 3, 3, 4, 4]
    },
    {
        nameValue: "Cezar C.",
        imageURL: "http://www4.pictures.zimbio.com/gi/Power+Season+Two+Series+Premiere+Arrivals+oBonI8j7LVTx.jpg",
        answerArray: [4, 1, 2, 1, 2, 3, 1, 1, 3, 2]
    },
    {
        nameValue: "Steve M.",
        imageURL: "http://images.mid-day.com/images/2017/feb/23Tom-Hanks-1.jpg",
        answerArray: [4, 2, 5, 4, 4, 5, 3, 2, 2, 4]
    },
    {
        nameValue: "Ryan W.",
        imageURL: "http://az801229.vo.msecnd.net/wetpaint/2015/11/chris-pine-mustache.jpg",
        answerArray: [5, 5, 5, 3, 4, 2, 1, 3, 5, 2]
    },
    {
        nameValue: "Melissa D.",
        imageURL: "http://celebritywc.com/images/tracee-ellis-ross-6.jpg",
        answerArray: [5, 1, 4, 5, 1, 5, 1, 5, 3, 4]
    },
    {
        nameValue: "Ryan C.",
        imageURL: "https://tce-live2.s3.amazonaws.com/media/media/afbb6c7e-3f06-4b6b-9d01-4d6c3fa05c20.jpg",
        answerArray: [5, 1, 5, 5, 1, 2, 5, 5, 3, 1]
    },
    {
        nameValue: "Renee G.",
        imageURL: "https://am23.akamaized.net/tms/cnt/uploads/2014/04/mulgrew2-633x480.jpg",
        answerArray: [5, 5, 2, 5, 5, 5, 2, 4, 5, 1]
    },
    {
        nameValue: "Alex S.",
        imageURL: "https://i.pinimg.com/736x/8f/cb/37/8fcb37ed8e17a85f778cdcf4bf627b13.jpg",
        answerArray: [4, 1, 2, 5, 4, 5, 1, 3, 1, 5]
    },
    {
        nameValue: "Dimitri B.",
        imageURL: "http://www.gstatic.com/tv/thumb/persons/165127/165127_v9_bb.jpg",
        answerArray: [5, 1, 3, 4, 3, 2, 2, 2, 4, 4]
    },
    {
        nameValue: "Dimitre H.",
        imageURL: "https://i.kinja-img.com/gawker-media/image/upload/s--JNcFDiwl--/c_scale,f_auto,fl_progressive,q_80,w_800/euabnbbkrpuart3twhkb.jpg",
        answerArray: [4, 4, 5, 4, 3, 5, 1, 4, 5, 2]
    },
    {
        nameValue: "Jeremy H.",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chris_Pratt_by_Gage_Skidmore_2.jpg/1200px-Chris_Pratt_by_Gage_Skidmore_2.jpg",
        answerArray: [3, 3, 5, 5, 1, 5, 5, 5, 3, 2]
    },
    {
        nameValue: "Dillon S.",
        imageURL: "https://s3.amazonaws.com/cnusports.com/images/2017/3/4/Dillon_Sykes_5.jpg",
        answerArray: [5, 1, 3, 5, 1, 5, 2, 1, 1, 3]
    },
    {
        nameValue: "Dominique G.",
        imageURL: "http://www1.pictures.stylebistro.com/gi/Rosario+Dawson+Makeup+Neutral+Eyeshadow+ByPqC0OhO3gx.jpg",
        answerArray: [2, 1, 5, 5, 1, 3, 5, 5, 3, 3]
    },
    {
        nameValue: "Wendy L.",
        imageURL: "https://countrymusicnation.com/wp-content/uploads/2017/06/Sally_Field_Knows_A_Thing_Or_Two_About_Kissing_-_YouTube.jpg",
        answerArray: [5, 5, 5, 5, 5, 5, 5, 5, 4, 5]
    }
];

module.exports = friendsArray;