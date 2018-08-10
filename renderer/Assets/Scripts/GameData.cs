using System;

[Serializable]
public class GameData
{
    public int board;
    public Move[] initial_state;
    public string winner;
    public Move[] moves;
    public PlayersScore score;
}
