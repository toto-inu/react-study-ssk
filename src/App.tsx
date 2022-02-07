import React, { useEffect, useState } from 'react'
import { Button, Center, VStack, HStack, Input, Text } from '@chakra-ui/react'

// store
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFunction } from '@c/modules/book'

// ui
import { ListBooks } from '@c/organisms/ListBooks'

export const App = () => {
  // store
  const { value: book, loading, error } = useSelector((state: RootState) => state.book)
  const dispatch = useDispatch()

  const [keyword, setKeyword] = useState('')
  const [result, setResult] = useState([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  console.log('🦊', fetchFunction('落語'))
  return (
    <>
      <Center w="100%" h="300px">
        <VStack>
          <HStack>
            <Text>{JSON.stringify(book)}</Text>
            <Button
              onClick={() => {
                dispatch(fetchFunction('落語'))
              }}
            >
              取得
            </Button>
          </HStack>
          <HStack>
            <Input value={keyword} onChange={handleChange} />
            {/* <Button onClick={(e) => fetch(e, keyword)}>検索</Button> */}
          </HStack>
        </VStack>
      </Center>
      {/* {JSON.stringify(result)} */}
      <ListBooks books={result} />
    </>
  )
}
