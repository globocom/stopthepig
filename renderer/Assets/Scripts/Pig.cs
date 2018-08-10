using UnityEngine;
using System.Collections;

public class Pig : MonoBehaviour
{
	// Use this for initialization
	void Start()
	{

	}

	// Update is called once per frame
	void Update()
	{
			
	}

    public void Move(Move move)
    {
        float z = move.x;

        if ((move.y % 2) != 0)
        {
            z += 0.5f;    
        }
        
        transform.position = new Vector3(move.y, transform.position.y, z);
    }
}
