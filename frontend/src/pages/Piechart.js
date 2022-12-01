import React, { useEffect, useState } from 'react'
import useUsers from '../services/users'
import Chart from 'react-apexcharts'

const Piechart = () => {
  const { users, fetch } = useUsers()

  useEffect(() => {
    fetch()
  }, [fetch])

  const cities = {}
  users.forEach(function (c) {
    cities[c?.address?.city] = (cities[c?.address?.city] || 0) + 1
  })

  const cityNames = []
  const population = []
  for (var key in cities) {
    cityNames.push(key)
    population.push(cities[key])
  }
  console.log(population)
  return (
    <div>
      <div>
        <Chart
          type='pie'
          width={1349}
          height={800}
          series={population}
          options={{
            labels: cityNames,
          }}
        ></Chart>
      </div>
    </div>
  )
}

export default Piechart
