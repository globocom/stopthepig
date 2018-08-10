using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(FencesManager))]
public class GameManager : MonoBehaviour
{
    public Pig pig;
    public float timeBetweenMoves;
    public Material grass;
    public UIController uiController;

    private GameData data;
    private Vector3 initialCameraPosition;
    private int currentMovement;
    private float timeSinceLastMove;
    private bool startMovement;
    private GameObject[,] board;
    private GameObject boardObject;
    private FencesManager fencesManager;

    void Start()
    {
        initialCameraPosition = Camera.main.transform.position;
        ResetGame();
        BuildGround(11);
        SetCameraPosition(11);
        SetInitialPigPosition(11);
        fencesManager = GetComponent<FencesManager>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GameRenderer("{ \"board\": 11, \"initial_state\": [ { \"x\": 4, \"y\": 4 }, { \"x\": 5, \"y\": 4 }, { \"x\": 6, \"y\": 4 }, { \"x\": 3, \"y\": 5 }, { \"x\": 4, \"y\": 6 }, { \"x\": 5, \"y\": 6 }, { \"x\": 6, \"y\": 6 } ], \"moves\": [ { \"player\": \"P\", \"action\": \"move\", \"x\": 5, \"y\": 5 }, { \"player\": \"F\", \"action\": \"block\", \"x\": 10, \"y\": 10 }, { \"player\": \"P\", \"action\": \"move\", \"x\": 6, \"y\": 5 }, { \"player\": \"F\", \"action\": \"block\", \"x\": 10, \"y\": 9 }, { \"player\": \"P\", \"action\": \"move\", \"x\": 7, \"y\": 5 }, { \"player\": \"F\", \"action\": \"block\", \"x\": 10, \"y\": 8 }, { \"player\": \"P\", \"action\": \"move\", \"x\": 8, \"y\": 5 }, { \"player\": \"F\", \"action\": \"block\", \"x\": 10, \"y\": 7 }, { \"player\": \"P\", \"action\": \"move\", \"x\": 9, \"y\": 5 }, { \"player\": \"F\", \"action\": \"block\", \"x\": 10, \"y\": 6 }, { \"player\": \"P\", \"action\": \"finish\", \"x\": 10, \"y\": 5 } ], \"winner\": \"P\", \"score\": { \"P\": { \"score\": 5 }, \"F\": { \"score\": 5 } } }");
        }

        if (startMovement) 
        {
            MoveGame();
        }
    }

    private void MoveGame()
    {
        if (timeSinceLastMove >= timeBetweenMoves)
        {
            if (currentMovement >= data.moves.Length) 
            {
                uiController.showUI(data);
                startMovement = false;
                return; // Termina o jogo
            }

            Move move = data.moves[currentMovement];

            if (move.player == "P") 
            {
                pig.Move(move);
            }
            else 
            {
                AddFence(move);
            }

            currentMovement++;
            timeSinceLastMove = 0;
        }

        timeSinceLastMove += Time.deltaTime;
    }

    void BuildGround(int boardSize)
    {
        boardObject = new GameObject();
        boardObject.name = "Board";

        float depth = 0.25f;
        board = new GameObject[boardSize, boardSize];
        for (int i = 0; i < boardSize; i++)
        {
            for (int j = 0; j < boardSize; j++)
            {
                GameObject tile = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                tile.transform.localScale = new Vector3(0.95f, depth, 0.95f);
                tile.transform.position = new Vector3(i, -depth, j + (i % 2 != 0 ? 0.5f : 0));

                Renderer rend = tile.GetComponent<Renderer>();
                rend.material = grass;

                board[i, j] = tile;
                tile.transform.parent = boardObject.transform;
            }
        }
    }

    void SetCameraPosition(int boardSize)
    {
        Camera.main.transform.position = initialCameraPosition + new Vector3(boardSize / 2, 0, boardSize / 2);
    }

    void SetInitialPigPosition(int boardSize)
    {
        float x = boardSize / 2;
        float z = boardSize / 2;

        if ((x % 2) != 0)
        {
            z += 0.5f;
        }
        pig.transform.position = new Vector3(x, pig.transform.position.y, z);
    }

    void SetInitialFencePosition(Move[] initialState) 
    {
        for (int i = 0; i < initialState.Length; i++)
        {
            Move move = initialState[i];
            AddFence(move);
        }
    }

    void AddFence(Move move)
    {
        fencesManager.InsertFence(move.x, move.y);
    }

    void GameRenderer(string gameData)
    {
        ResetGame();
        DestroyBoard();
        fencesManager.Destroy();

        data = JsonUtility.FromJson<GameData>(gameData);

        fencesManager.Initialize(data.board);
        BuildGround(data.board);
        SetCameraPosition(data.board);
        SetInitialPigPosition(data.board);
        SetInitialFencePosition(data.initial_state);

        startMovement = true;
    }

    void DestroyBoard()
    {
        Destroy(boardObject);
    }

    void ResetGame() 
    {
        uiController.hideUI();
        startMovement = false;
        timeSinceLastMove = 0;
        currentMovement = 0;    
    }
}
