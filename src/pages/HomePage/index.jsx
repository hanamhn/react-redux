function HomePage(props) {
  const hobbyList = useSeletor(state => state.hobby.list);
  const dispatch = const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newHobby = 'Coding';
    dispatch({
      type: 'ADD_HOBBY',
      payload: newHobby,
    })
  }
  return (
    <div className="home-page">
      <HobbyList data={hobbyList} />

      <button onClick={handleAddHobbyClick}>Add new hobby</button>
    </div>
  )
}

export default HomePage