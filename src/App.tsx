import React, { useEffect, useState } from 'react'
import { Box, Button, Center, VStack, HStack, Input, Text } from '@chakra-ui/react'

// store
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFunction } from '@c/modules/book'

// ui
import { ListBooks } from '@c/organisms/ListBooks'

export const App = () => {
  // store
  const { value: books } = useSelector((state: RootState) => state.book)
  const dispatch = useDispatch()

  const [keyword, setKeyword] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  useEffect(() => {
    console.log('🐩', books)
  }, [books])
  return (
    <>
      <Center w="100%" h="300px">
        <HStack>
          {/* <Text>{JSON.stringify(books)}</Text> */}
          <Input value={keyword} onChange={handleChange} />
          <Button
            onClick={() => {
              dispatch(fetchFunction(keyword))
            }}
          >
            取得
          </Button>
        </HStack>
      </Center>
      <Center>
        <Box maxW="796px">
          {books && books.data.Items.length > 0 && <ListBooks books={books.data.Items} />}
        </Box>
      </Center>
    </>
  )
}
