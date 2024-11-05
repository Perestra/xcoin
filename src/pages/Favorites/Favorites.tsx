import style from './Favorites.module.scss'

import { useAccountContext } from '@/hooks/useAccountContext'
import { useAuthAccountContext } from '@/hooks/useAuthAccountContext'
import { Header } from '@/components/Header/Header'
import { FavCard } from '@/components/FavCard/FavCard'
import { UserIntroduction } from '@/components/UserIntroduction/UserIntroduction'
import { useAxios } from '@/hooks/useAxios'
import { AwsomeAPI } from '@/api/EconomiaAwsomeAPI'
import { useMemo } from 'react'
import { getCurrencyCode } from '@/utils/getCurrencyCode'

export const Favorites: React.FC = () => {

    const { accounts } = useAccountContext()
    const { authAccount } = useAuthAccountContext()
    
    const userLogged = accounts.filter(account => account.id === authAccount.accounts[0].id )[0]
    
    const url = `/last/${userLogged.favorites.map(currency => `${currency.code}-${getCurrencyCode(userLogged.currency,0)}`).join(',')}`
    const { data } = useAxios(AwsomeAPI, 'get', url)

    let FavList = useMemo( () => 
        Object.entries(data??{}).map( ([key, value]) => ({label: value, value: key}) 
        ), [data] 
    )

  return (
    <div className={style.content}>
        <Header 
            classLogin='hidde' 
            bgColor='blue'
            to='/variacao'
        />
        <main className={style.content__main}>
            <section className={style.content__section}>
                <UserIntroduction />
                <div className={style.content__cards}>
                    {FavList.map( (favorite, index) => (<FavCard key={index} code={favorite.label.code} exchange={`${Number(favorite.label.bid).toFixed(2)} ${favorite.label.codein}`} />) )}
                </div>
            </section>
        </main>
    </div>
  )
}
