getplayer1_name=localStorage.getItem("player1_name_key")
getplayer2_name=localStorage.getItem("player2_name_key")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=getplayer1_name+" - "
document.getElementById("player2_name").innerHTML=getplayer2_name+" - "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn -"+getplayer1_name
document.getElementById("player_answer").innerHTML="answer turn -"+getplayer2_name