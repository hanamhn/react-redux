import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }), shallowEqual);

  const dispatch = useDispatch();
  console.log("hobbyList: ", hobbyList);
  const handleAddHobbyClick = () => {
    //Random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: `Hobby ${newId}`,
    };
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}
HomePage.protoType = {};
export default HomePage;
