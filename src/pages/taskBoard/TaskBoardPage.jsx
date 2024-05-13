import { useState, useEffect } from 'react'
import { ListTasks } from '../../components/ListTasks'
import { Navbar } from '../../components/navbar/Navbar'
import { YoAnderson } from '../../components/Yo'
import { useNavigate } from 'react-router-dom'

export const TaskBoardPage = () => {
  const [listTasks, setListTasks] = useState(false);
  const [yoAnderson, setYoAnderson] = useState(false);


  const handleYoAnderson = () => {
    if (listTasks) {
      setListTasks(!listTasks)
    }
    setYoAnderson(!yoAnderson)
  };

  const handleToggleListTasks = () => {
    if (yoAnderson) {
      setYoAnderson(!yoAnderson)
    }
    setListTasks(!listTasks);
  };

  return (
    <div>
      <Navbar toggleListTasks={handleToggleListTasks} toggleYoAnderson={handleYoAnderson} />
      <br />
      {listTasks && <ListTasks />}
      {yoAnderson && <YoAnderson />}
    </div>
  )
}
