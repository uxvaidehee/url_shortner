import React, { useState } from 'react'
import { useGetAdminUsersQuery, useLazyGetAdminUserUrlsQuery, useUpdateAdminUserMutation } from '../../../redux/api/adminApi'

const Dashboard = () => {
  const { data } = useGetAdminUsersQuery()
  const [userUrls, { data: urlData }] = useLazyGetAdminUserUrlsQuery()
  const [updateUser] = useUpdateAdminUserMutation()
  const [selectedUser, setselectedUser] = useState()
  return <>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className='bg-danger'>
            <ul class="list-group">
              {data && data.map(item => <li key={item._id}
                onClick={e => userUrls(item._id)}

                // key={item._id}
                className='list-group-item d-flex justify-content-between'>{item.name}
                <button onClick={e => setselectedUser(item)} type='button' className='btn btn-warning btn-sm'><i className='bi bi-pencil'></i></button>
              </li>)}

              {/* <li class="list-group-item">An item</li> */}
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className='bg-primary'>
            <ul class="list-group">
              {urlData && urlData.map(item =>
                // <li class="list-group-item justify-content-between d-flex"><span>{item.longUrl}</span><span className='badge text-bg-info'>10</span></li>
                <li key={item._id} class="list-group-item justify-content-between d-flex"><span>{item.longUrl}</span><span className='badge text-bg-info'>{item.count}</span></li>
              )}

            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          {
            selectedUser && <div className='card'>
              <div className="card-header">{selectedUser.name}</div>
              <div className="card-body">
                <div className='my-2'>
                  <label for="name" class="form-label">First name</label>
                  <input
                    onChange={e => setselectedUser({ ...selectedUser, name: e.target.value })}
                    value={selectedUser.name} type="text" class="form-control" id="name" placeholder="Enter Your Name" />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div className='my-2'>
                  <label for="name" class="form-label">First name</label>
                  <input
                    onChange={e => setselectedUser({ ...selectedUser, email: e.target.value })}
                    type="text" class="form-control" value={selectedUser.email} id="name" placeholder="Enter Your Name" />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="form-check form-switch my-2">
                  <input
                    onChange={e => setselectedUser({ ...selectedUser, active: e.target.checked })}
                    checked={selectedUser.active} type="checkbox" className='form-control-input' id="id" />
                  {/* <label  /> */}
                  <label className='form-check-label' for="id">Active Acc</label>
                </div>
                <button
                  onClick={e => {
                    updateUser(selectedUser)
                    setselectedUser(null)
                  }}
                  type='button' className='submit'>Update profile</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  </>
}

export default Dashboard