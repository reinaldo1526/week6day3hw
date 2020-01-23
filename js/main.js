function f1Data(){
    let year = $("#f1Form input[name=year]").val()
    let lap = $("#f1Form input[name=lap]").val()
    console.log(year, lap)

    $.get('https://ergast.com/api/f1/'+ year + '/' + lap + '/'+'driverStandings.json', function (data){
        let common = data.MRData.StandingsTable.StandingsLists[0]

        // For loob for the table

        for(let i = 0; i < 8; i++){
            let position = common.DriverStandings[i].position
            let name = common.DriverStandings[i].Driver.givenName
            let nationality = common.DriverStandings[i].Driver.nationality
            let sponser = common.DriverStandings[i].Constructors[0].name
            let points = common.DriverStandings[i].points

            // Input Data into Table
            $("#position" + i.toString()).text(position)
            $("#driverName" + i.toString()).text(name)
            $("#nationality" + i.toString()).text(nationality)
            $("#sponser" + i.toString()).text(sponser)
            $("#points" + i.toString()).text(points)





        }
    })
}