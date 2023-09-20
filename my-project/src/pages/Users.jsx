import { UsersFooter,} from "../components/pageComponents/users/UsersFooter"
import { UsersHeader,} from "../components/pageComponents/users/UsersHeader"
import { UsersTable,} from "../components/pageComponents/users/UsersTable"

import {Box, Heading, Spinner } from '@chakra-ui/react'
import {useFetch} from '../hooks/useFetch'
// import {useState} from 'react'
// import {useDebounce} from '../hooks/useDebounce'


export const Users = () => {
      // const [pagination, setPagination] = useState(1)
      const [search, setSearch] = useState('')
      const debouncedSearch = useDebounce(search, 500)
      const { data, isLoading, error } = useFetch (
      `users/search?q=${debouncedSearch.trim().toLowercase()}`

      const handleSearch = searchInput => setSearch(searchInput)
      
      //to do  pagination
      //const handleBackwards =

      // if(isLoading) return <Spinner />
      // if(error) return <heading>{error}</heading>
      // const { data, isLoading, error } = useFetch('users')

      if (isLoading) return <Spinner />
      if (error) return <Heading>{error}</Heading>

      return (
      <Box width='full'>
                  <UsersHeader handleSearch={handleSearch} />
                  <UsersTable data={data}/>
                  <UsersFooter />
            </Box>
            )
}
