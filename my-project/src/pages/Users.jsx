import { UsersFooter,} from "../components/pageComponents/users/UsersFooter"
import { UsersHeader,} from "../components/pageComponents/users/UsersHeader"
import { UsersTable,} from "../components/pageComponents/users/UsersTable"

import {Box} from '@chakra-ui/react'

const baseUrl = import.meta.env.BASEURL

export const Users = () => {

      console.log(baseUrl)

      return <Box width='full'>
                  <UsersHeader />
                  <UsersTable />
                  <UsersFooter />
            </Box>
}
