//Módulos Importados
import './App.css';
import { useState, useRef, useEffect } from 'react';

//Componente App
function App() {

  // Hooks
  const [tareas, setTareas] = useState([]);
  const tareaTexto = useRef();
  useEffect(() => {
    const tareasExistentes = localStorage.getItem('tareas');
    setTareas(tareasExistentes ? JSON.parse(tareasExistentes) : []);
  }, [])

  // Manejador de eventos
  function addTarea(event) {
    event.preventDefault();
    const next = [...tareas, tareaTexto.current.value];
    tareaTexto.current.value = "";
    setTareas(next);
    localStorage.setItem('tareas', JSON.stringify(next));
  }
 
  // Bloque de renderizado
  return (
    <div className="App">
      <ul>
        {tareas.map(tarea => (<li key={tarea}>{tarea}</li>))}
      </ul>

      <form onSubmit={addTarea}>
        <input ref={tareaTexto} />
        <input type="submit" value="Añadir Tarea" />
      </form>
    </div>
  )
}

// Exportar Módulo
export default App;
