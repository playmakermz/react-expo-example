import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Home from './components/Home'
import AddNote from './screens/addNote'
import EditNote from './screens/editNote'
import { styles } from './components/Style'


// ====================== New function =====================
function CurrentPageWidget ({ currentPage, noteList, setCurrentPage }){
  switch (currentPage) {
    case 'home': // memasukan state "noteList" dan setState "setCurrentPage"
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        />
      )
    case 'add': // ubah component pada halaman
      return <AddNote />
    case 'edit': // ubah component pada halaman
      return <EditNote />
    default: // kembali ke component awal saat 'home'
      return <Home />
  }
}


function App(){
  const [currentPage, setCurrentPage] = useState('home') // New state

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  return(
    <View style={styles.zero}>
      <View style={styles.main}>

      <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    />
    
</View>

    </View>
  )
}



export default App;