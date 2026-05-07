import { RouterProvider } from "react-router"

import { router } from "./router/route"  // 

function App() {
  return <RouterProvider router={router} />
}

export default App