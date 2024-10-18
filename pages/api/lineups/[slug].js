// /pages/api/teams/[slug].js

const PlayerPosition = Object.freeze({
    GOALKEEPER,
    DEFENDER,
    MIDFIELDER,
    ATTACKER
});

const teams = {


    teams: [
        {
            slug: "vapor",
            players: [
                {
                    player_name: "", preferredPosition: PlayerPosition.GOALKEEPER, tshirtNumber: "1", isMainPlayer: false,
                    plays: [
                        { playPosition: "", playValue: "" },
                        { playPosition: "", playValue: "" },
                        { playPosition: "", playValue: "" }]
                }]
        },

    ]
};


export default function handler(req, res) {
    const { slug } = req.query;  // Get the slug from the query params
    const locale = req.query.locale || 'en';  // Default to English if no locale is provided

    // Select the correct data based on locale
    const data = teams[locale];

    // Find the team by slug in the selected locale
    const team = data.find(item => item.slug === slug);

    if (team) {
        res.status(200).json({ message: team });
    } else {
        res.status(404).json({ message: `Team with slug "${slug}" not found in locale "${locale}"` });
    }
}

/*

EQUIP


{ slug: "vapor", 
players: [
  {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
      plays:[
          {playPosition:"",playValue:""},
          {playPosition:"",playValue:""},
          {playPosition:"",playValue:""}]
      },
      {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
          plays:[
              {playPosition:"",playValue:""},
              {playPosition:"",playValue:""},
              {playPosition:"",playValue:""}]
          }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
              plays:[
                  {playPosition:"",playValue:""},
                  {playPosition:"",playValue:""},
                  {playPosition:"",playValue:""}]
              }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                  plays:[
                      {playPosition:"",playValue:""},
                      {playPosition:"",playValue:""},
                      {playPosition:"",playValue:""}]
                  }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                      plays:[
                          {playPosition:"",playValue:""},
                          {playPosition:"",playValue:""},
                          {playPosition:"",playValue:""}]
                      }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                          plays:[
                              {playPosition:"",playValue:""},
                              {playPosition:"",playValue:""},
                              {playPosition:"",playValue:""}]
                          }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                              plays:[
                                  {playPosition:"",playValue:""},
                                  {playPosition:"",playValue:""},
                                  {playPosition:"",playValue:""}]
                              }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                                  plays:[
                                      {playPosition:"",playValue:""},
                                      {playPosition:"",playValue:""},
                                      {playPosition:"",playValue:""}]
                                  }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                                      plays:[
                                          {playPosition:"",playValue:""},
                                          {playPosition:"",playValue:""},
                                          {playPosition:"",playValue:""}]
                                      }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                                          plays:[
                                              {playPosition:"",playValue:""},
                                              {playPosition:"",playValue:""},
                                              {playPosition:"",playValue:""}]
                                          }, {player_name:"",preferredPosition:PlayerPosition.GOALKEEPER,tshirtNumber:"1", isMainPlayer:false,
                                              plays:[
                                                  {playPosition:"",playValue:""},
                                                  {playPosition:"",playValue:""},
                                                  {playPosition:"",playValue:""}]
                                              }] }
*/