using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fence : MonoBehaviour
{
    public GameObject connectorPrefab;

    public enum ConnectorDirection
    {
        West,
        Northwest,
        Northeast,
        East,
        Southeast,
        Southwest
    }

    private List<GameObject> connectors = new List<GameObject>();

    public void CreateConnectors(List<ConnectorDirection> connectorsDirections, GameObject parent)
    {
        Debug.Log("Connectors:");

        Vector3 fencePosition = transform.position;
        foreach (ConnectorDirection direction in connectorsDirections)
        {
            Debug.Log(direction);
            Vector3 connectorPosition = Vector3.zero;
            Quaternion connectorRotation = Quaternion.Euler(Vector3.zero);
            switch (direction)
            {
                case ConnectorDirection.West:
                    connectorPosition = new Vector3(0, 0, -0.5f);
                    break;
                case ConnectorDirection.Northwest:
                    connectorPosition = new Vector3(-0.5f, 0, -0.25f);
                    connectorRotation = Quaternion.Euler(new Vector3(0, 60, 0));
                    break;
                case ConnectorDirection.Northeast:
                    connectorPosition = new Vector3(-0.5f, 0, 0.25f);
                    connectorRotation = Quaternion.Euler(new Vector3(0, -60, 0));
                    break;
                case ConnectorDirection.East:
                    connectorPosition = new Vector3(0, 0, 0.5f);
                    break;
                case ConnectorDirection.Southeast:
                    connectorPosition = new Vector3(0.5f, 0, 0.25f);
                    connectorRotation = Quaternion.Euler(new Vector3(0, 60, 0));
                    break;
                case ConnectorDirection.Southwest:
                    connectorPosition = new Vector3(0.5f, 0, -0.25f);
                    connectorRotation = Quaternion.Euler(new Vector3(0, -60, 0));
                    break;
            }

            GameObject fenceConnector = Instantiate(
                connectorPrefab,
                fencePosition + connectorPosition,
                connectorRotation
            );
            this.connectors.Add(fenceConnector);
            fenceConnector.transform.parent = parent.transform;
        }
    }
}