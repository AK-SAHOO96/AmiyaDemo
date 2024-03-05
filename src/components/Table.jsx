import React from 'react'
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>Page</th>
            <th className='expand'>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, idx) => {
const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return <tr key={idx}>
                <td>{row.page}</td>
                <td className='expand'>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>{statusText}</span>
                </td>
                <td>
                  <span className='actions'>
                    <BsFillTrashFill className='delet-btn' onClick={() => deleteRow(idx)}/>
                    <BsFillPencilFill className='edit-btn' onClick={() => editRow(idx)}/>
                  </span>
                </td>
              </tr>
            }
            )
          }
          {/* <tr>
            <td>Home</td>
            <td>This is the first page</td>
            <td>
              <span className='label label-live'>Live</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delet-btn' />
                <BsFillPencilFill className='edit-btn' />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This is the second page</td>
            <td>
              <span className='label label-draft'>Draft</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delet-btn' />
                <BsFillPencilFill className='edit-btn' />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This is the third page</td>
            <td>
              <span className='label label-error'>Error</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delet-btn' />
                <BsFillPencilFill className='edit-btn' />
              </span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table
