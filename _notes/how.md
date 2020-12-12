

- GlobalStyles


- Style React componet
```
  export const ButtonLink = styled(ReachRouterLink)`

  `;
```


- Pass parameter
```
const ItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ItemContainerWithWarning = styled(ItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '2px solid red')};
`;

const Container = todo.isCompleted ? ItemContainer : ItemContainerWithWarning;

<Container createdAt={todo.createdAt} />
    
```


- Extend 
```
const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;
```




