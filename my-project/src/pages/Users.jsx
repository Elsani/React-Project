import { UsersFooter,} from "../components/pageComponents/users/UsersFooter"
import { UsersHeader,} from "../components/pageComponents/users/UsersHeader"
import { UsersTable,} from "../components/pageComponents/users/UsersTable"

import {Box} from '@chakra-ui/react'



export const Users = () => {
      return <Box width='full'>
                  <UsersHeader />
                  <UsersTable />
                  <UsersFooter />
            </Box>
}
