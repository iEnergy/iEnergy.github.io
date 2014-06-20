$(document).ready(function(){
    var registry_drains_get_json = 
          [
   {
      drain:"M1-P3",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-AE",
      unit:"W·h",
      real:true,
      keepHistory:true,
      historyFunction:"SUM"
   },
   {
      drain:"M2-I3",
      unit:"A",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-I2",
      unit:"A",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-I1",
      unit:"A",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-P1",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-LN3",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-P1",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-P2",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-P2",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-I2",
      unit:"A",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-LN1",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-I1",
      unit:"A",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-LN3",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-LN1",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-LN2",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-P3",
      unit:"W",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-LN2",
      unit:"V",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-F",
      unit:"Hz",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M1-I3",
      unit:"A",
      real:true,
      keepHistory:true,
      aggregationFunction:"MAX",
      historyFunction:"AVG"
   },
   {
      drain:"M1-F",
      unit:"Hz",
      real:true,
      keepHistory:true,
      historyFunction:"AVG"
   },
   {
      drain:"M2-AE",
      unit:"W·h",
      real:true,
      keepHistory:true,
      historyFunction:"SUM"
   },
   {
      drain:"TOTAL",
      unit:"W",
      real:false,
      keepHistory:true,
      formula:[
         {
            drain:"M2-P3",
            sign:1
         },
         {
           drain:"M1-P3",
            sign:1
         }
      ],
      historyFunction:"AVG"
   }];
   
   $("#registry-drains-get").JSONView(registry_drains_get_json,{collapsed: true, nl2br: true});
   
   $(".json-expand").click(function(){
      var id = ($(this).attr('id')).replace('-expand-btn', ''); 
      console.log(id);
      $("#"+id).JSONView('expand');
   });
   $(".json-collapse").click(function(){
      var id = ($(this).attr('id')).replace('-collapse-btn', ''); 
      console.log(id);
       $("#"+id).JSONView('collapse');
   });

   var registry_drains_post_json = {
    drain: "DRAIN-TPE",
    description: "Totale edificio",
    unit: "W",
    keepHistory: true,
    formula: [
        {
            drain: "M1-P1",
            sign: 1
        }
    ],
    aggregationFunction: "AVG",
    historyFunction: "AVG"
};

    $("#registry-drains-post").JSONView(registry_drains_post_json,{collapsed: true, nl2br: true});
    
   var registry_drains_drain_get_json = {
    "drain": "DRAIN-TPE",
    "description": "Totale edificio",
    "unit": "W",
    "real": false,
    "keepHistory": true,
    "formula": [
        {
            "drain": "M1-P1",
            "sign": 1
        }
    ],
    "aggregationFunction": "AVG",
    "historyFunction": "AVG"
};
    $("#registry-drains-drain-get").JSONView(registry_drains_drain_get_json,{collapsed: true, nl2br: true});

    var measure_instants_drain_get_json = {
    "drain": "M1-P3",
    "unit": "W",
    "value": 20,
    "time": "2013-12-05T10:12:01+0100"
};

 $("#measure-instants-drain-get").JSONView(measure_instants_drain_get_json,{collapsed: true, nl2br: true});
 
    var measure_detail_history_drain_get_json = {
    "drain": "M1-P3",
    "unit": "W",
    "queryParam": {
        "timeAggregation": "MINUTE",
        "start": "2013-12-05T10:35:16+0100",
        "end": "2013-12-05T11:35:16+0100"
    },
    "measures": [
        {
            "value": 15,
            "time": "2013-12-05T10:36:12+0100"
        },
        {
            "value": 6.67,
            "time": "2013-12-05T10:37:12+0100"
        }
    ]
};
$("#measure-detail-history-drain-get").JSONView(measure_detail_history_drain_get_json,{collapsed: true, nl2br: true});

var measure_detail_history_time_get_json = {
    "start": "2013-12-12T12: 37: 45+0100",
    "end": "2014-02-20T16: 58: 04+0100"
};

$("#measure-detail-history-time-get").JSONView(measure_detail_history_time_get_json,{collapsed: true, nl2br: true});

var confort_indicator_get_json = [
   {
      "name":"PROVA",
      "description":"prova prova",
      "result":-1.0,
      "function":"AVG",
      "type":"Humidity"
   }
];

$("#confort-indicator-get").JSONView(confort_indicator_get_json,{collapsed: false, nl2br: true});

var confort_indicator_post_json = {
     "name":"PROVA",
     "description":"prova prova",
     "function":"AVG",
     "type":"Humidity"
  };
  
 
  
  $("#confort-indicator-post").JSONView(confort_indicator_post_json,{collapsed: true, nl2br: true});
  
  var confort_indicator_name_get_json = {
   "name":"PROVA",
   "description":"prova prova",
   "result":-1.0,
   "function":"AVG",
   "type":"Humidity"
};
$("#confort-indicator-name-get").JSONView(confort_indicator_name_get_json,{collapsed: true, nl2br: true});
  
  var confort_indicator_name_options_get_json = [
   {
      "name":"Wet",
      "value":1
   },
   {
      "name":"Good",
      "value":0
   },
   {
      "name":"Dry",
      "value":-1
   }
];
  
  $("#confort-indicator-name-options-get").JSONView(confort_indicator_name_options_get_json,{collapsed: true, nl2br: true});
  
  
  var confort_indicator_name_votes_get_json=[
   {
      "value":-1,
      "time":"2013-10-21T15:19:16"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:29"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:30"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:31"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:31"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:31"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:31"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:31"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:32"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:32"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:32"
   },
   {
      "value":-1,
      "time":"2013-10-21T15:25:32"
   }
];
  $("#confort-indicator-name-votes-get").JSONView(confort_indicator_name_votes_get_json,{collapsed: true, nl2br: true});
  
  var confort_indicator_name_votes_post_json ={
   "value":-1
};
  $("#confort-indicator-name-votes-post").JSONView(confort_indicator_name_votes_post_json,{collapsed: true, nl2br: true});
  
  var processing_post = 
{
    "datapoints": [
        {
            "at": "2013-11-29T16:50:01.000+0100",
            "value": "350.0",
            "unitOfMeasure": "ppm"
        }
    ]
};

  $("#processing-post").JSONView(processing_post,{collapsed: true, nl2br: true});
  
});

