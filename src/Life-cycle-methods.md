# All about class based components
whenever class based component is called 
* first the constructor is called
* then render is called
* once the component is rendered then componentDidMount is called(if we have parent and child components first child parents constructor --> parents render --> childs constructor -->childs render --> childs componentdidmount --> parents didmount)
* why do we use componentDidMount ?? -- to make api calls similar to functional component useEffect 
* If we have multiple children -- > parent constr --> parent render --> child1 constr --> child1 render --> child2 constr --> child2 render --> child1 componentdidMount --> child2 componentDidMount --> parent componentDidMount
* componentDidUpdate is called
The componentDidUpdate() method is an update method that is invoked after the componentDidMount() method

<!-- Mounting -->
* constructor
* render(with dummy data) -- component loads
* componentDidMount (*updates the state variables)
 <!-- update cycle -->
* render is called with new data
* componentDidupdate is called
<!-- unmounting -->
* componentWillunmount will be called ( when this component is removed from dom lets say if i go to another page)

