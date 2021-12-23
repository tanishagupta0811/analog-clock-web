var myEvents = [
    { 
      id: "required-id-1",
      name: "New Year", 
      date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
      type: "holiday", 
      everyYear: true 
    },
    { 
      id: "required-id-2",
      name: "Valentine's Day", 
      date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
      type: "holiday", 
      everyYear: true,
      color: "#222"
    },
    { 
      id: "required-id-3",
      name: "Custom Date", 
      badge: "08/03 - 08/05",
      date: ["August/03/2020", "August/05/2020"],
      description: "Description here",
      type: "event"
    },
    // more events here
  ];

  const evoCalendar = $('#evoCalendar');
  evoCalendar.evoCalendar({
    calendarEvents: myEvents
  })
  .on('selectDate', function(){
    evoCalendar.evoCalendar('toggleEventList',true);
  }) 

