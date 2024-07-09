import React from 'react'
import { useState } from 'react'
import { useAddUrlMutation, useGetUrlsQuery } from '../../redux/api/userApi'


const Account = () => {
  return <>
    <UrlForm />
    <UrlTable />
  </>
}
const UrlForm = () => {
  const [addurl] = useAddUrlMutation()
  const [urldata, seturldata] = useState({})
  const handleChange = e => {
    const { name, value } = e.target
    seturldata({ ...urldata, [name]: value })

  }
  return <>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">Short Link</div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <label htmlFor="longUrl" class="form-label">Paste URL</label>
                    <input
                      onChange={handleChange}
                      name='longUrl'
                      type="text" class="form-control" id="longUrl" placeholder="ex. https://www.lalala.com" />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-sm-6"><div>
                    <label htmlFor="domain" class="form-label">Domain</label>
                    <input
                      onChange={handleChange}
                      name='shortUrl'
                      disabled type="text" class="form-control" id="domain" value='http://localhost:5173' />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                  </div>
                  <div className="col-sm-6"><div>
                    <label htmlFor="shortUrl" class="form-label">Enter a Back-half</label>
                    <input
                      name='shortUrl'
                      onChange={handleChange}
                      type="text" class="form-control" id="shortUrl" placeholder="ex. lalala-link" />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="alert alert-success my-3"> <span className='bi bi-magic me-3'></span>No More Wordy Links!!</div>
                  </div>
                </div>
              </div>
              <button
                onClick={e => addurl(urldata)}
                type='submit' className='btn btn-primary btn-lg'>Generate Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}

const UrlTable = e => {
  const { data } = useGetUrlsQuery()
  return data && <table >
    <thead>
      <tr>
        <th>#</th>
        <th>Short Url</th>
        <th>Long Url</th>
        <th>Count</th>
        <th>Action</th>
      </tr>
    </thead>
    {data.map(item => <tr key={item._id}>
      <td>{`http://localhost:5173/visit/${item.shortUrl}`}</td>
      <td>{item.shortUrl}</td>
      <td>{item.longUrl}</td>
      <td>{item.count}</td>
      <td>
        <button type='button' className='mx-2 btn btn-warning'>Edit</button>
        <button type='button' className='mx-2 btn btn-danger'>Delete</button>
      </td>
    </tr>)}
  </table>
}

export default Account