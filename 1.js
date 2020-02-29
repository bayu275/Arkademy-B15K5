function biodata(name,age){
    let result = {
        nama : name,
        age : age,
        address : "Jl.Sumbersari GG.Bakti No.27 Pekanbaru",
        hobbies : ["Ngoding","Ngopi","Futsal","Karaoke","Holiday"],
        is_married : false,
        list_school : [
            {name : "SDN 157 Pekanbaru", year_in : 123, year_out : 123, major : null},
            {name : "SMPN 11 Pekanbaru", year_in : 123, year_out : 123, major : null},
            {name : "SMK Muhammadiyah 1 Pekanbaru", year_in : 123, year_out : 123, major : "Teknik Komputer Jaringan"}
        ],
        skills : [
            { name : "HTML", score : "Expert" },
            { name : "CSS", score : "Expert" },
            { name : "JAVASCRIPT", score : "Expert" },
            { name : "Bootstrap", score : "Advanced" },
            { name : "React", score : "Advanced" },
            { name : "NodeJS", score : "Beginner" },
            { name : "JAVA", score : "Beginner" },
            { name : "Design", score : "Beginner" },
            { name : "Mikrotik", score : "Advanced" },
            { name : "Cisco", score : "Beginner" },
            { name : "English", score : "Beginner" }
        ]
    }
    return JSON.stringify(result);
}

console.log(biodata("Bayu Setiawan",20))