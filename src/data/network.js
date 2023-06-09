import fetcher from './_fetcher'
import useSWR from 'swr'

export default function useNetwork () {
    const { data, error, isLoading } = useSWR(`https://api.citybik.es/v2/networks/velo-antwerpen`, fetcher)
   
    return {
      network: data?.network, //is de data aanwezig? dan ja (= vraagteken)
      isLoading,
      isError: error
    }
  }