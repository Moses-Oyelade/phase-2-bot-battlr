// import React,{ useEffect, useState} from 'react'

// const FilterTransaction = ({ setItems, catchphrase }) => {

//     const [inputText, setInputText] = useState("")

//     function handleFilterChange (e) {
//         e.preventDefault();
//         console.log(e.target.value)
//         setInputText(e.target.value)
//     }
        
//         useEffect(() => {
//           console.log('me here')
//         fetch("http://localhost:3000/bots")
//         .then((r) => r.json())
//         .then((bots) => { 
//               setItems(bots.filter((item) => {
//               if((item.catchphrase).toLowerCase().includes(inputText.toLowerCase())
//                 )
//               return item;
//             }))  
//             return true
//         })

//         }, [inputText, setItems])
//         console.log(catchphrase)

    
    
    

    



//   return (
//     <div>
//         <h3>Filter By Category</h3>
//         <div id="filter-search">
//             <input type="text"
//             name="filter"
//             onChange={handleFilterChange}
//             value={inputText}
//             placeholder="Search..."
//             />
       
//         </div>
//     </div>
//   )
// }

// export default FilterTransaction