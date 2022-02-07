import React, { useState, useEffect } from 'react'
import { Button, Checkbox, HStack, VStack } from '@chakra-ui/react'

type Props = {
  memberName: string
  height?: number
}

export const ButtonControllTest = ({ memberName, height }: Props) => {
  const [disable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('variable')
    console.log('🐕', memberName, height)
    return () => {
      console.log('unmounted variable')
    }
  }, [disable, loading])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.value) {
      case 'disable':
        setDisable(event.target.checked)
        break
      case 'loading':
        setLoading(event.target.checked)
        break
    }
  }
  return (
    <HStack key={memberName}>
      <VStack>
        <Checkbox onChange={handleChange} isChecked={disable} value="disable">
          isDisabled
        </Checkbox>
        <Checkbox onChange={handleChange} isChecked={loading} value="loading">
          表示/非表示
        </Checkbox>
      </VStack>
      {loading && (
        <Button
          colorScheme="facebook"
          size="xl"
          isDisabled={disable}
          isLoading={false}
          backgroundColor="tomato"
        >
          GO
        </Button>
      )}
    </HStack>
  )
}
