using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIController : MonoBehaviour {

    public Canvas canvas;
    public Text farmerScore;
    public Text pigScore;
    public Text winner;

    public void showUI(GameData gameData) {
        Debug.Log("Olar");
        canvas.enabled = true;
        farmerScore.text = gameData.score.F.score.ToString();
        pigScore.text = gameData.score.P.score.ToString();
        winner.text = gameData.winner == "P" ? "PIG" : "FARMER";

    }

    public void hideUI(){
        canvas.enabled = false;
    }
}
