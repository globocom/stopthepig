using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FencesManager : MonoBehaviour
{
    public Fence fencePrefab;

    private Fence[,] fences;
    private GameObject fenceParent;

    public void Initialize(int boardSize)
    {
        fenceParent = new GameObject();
        fenceParent.name = "Fence";

        fences = new Fence[boardSize, boardSize];
    }

	public void Destroy()
	{
        if (fenceParent != null)
        {
            Destroy(fenceParent);
        }
	}

	public void InsertFence(int x, int y)
    {
        if (existsFenceAt(x, y))
            return;

        bool isAtOddRow = y % 2 != 0;
        Fence fence = Instantiate(
            fencePrefab,
            new Vector3(y, 0, x + (isAtOddRow ? 0.5f : 0)),
            Quaternion.Euler(Vector3.zero)
        );
        List<Fence.ConnectorDirection> connectorsDirections = new List<Fence.ConnectorDirection>();

        if (existsFenceAt(x - 1, y))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.West);
        }
        if (existsFenceAt(x + 1, y))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.East);
        }

        int normalizedX = isAtOddRow ? x : x - 1;

        if (existsFenceAt(normalizedX, y - 1))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.Northwest);
        }
        if (existsFenceAt(normalizedX + 1, y - 1))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.Northeast);
        }
        if (existsFenceAt(normalizedX, y + 1))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.Southwest);
        }
        if (existsFenceAt(normalizedX + 1, y + 1))
        {
            connectorsDirections.Add(Fence.ConnectorDirection.Southeast);
        }
        fence.CreateConnectors(connectorsDirections, fenceParent);
        fence.transform.parent = fenceParent.transform;
        fences[x, y] = fence;
    }

    bool existsFenceAt(int x, int y)
    {
        if (x < 0 || x >= fences.GetLength(0) || y < 0 || y >= fences.GetLength(0))
        {
            return false;
        }

        return fences[x, y] != null;
    }
}