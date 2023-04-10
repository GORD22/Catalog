import React from 'react'
import style from '../../assets/Footer/Footer.module.css'
import {connect} from 'react-redux'
import Paginator from '../common/Paginator/Paginator'
import {setCurrentPage} from '../../store/catalogSlice'

const FooterContainer = ({totalElementsCount, currentPage, pageSize, toggleCatalog, setCurrentPage}) => {
    return (
        <footer className={style.footer}>
            {
                !toggleCatalog ?
            <Paginator totalElementsCount={totalElementsCount} currentPage={currentPage}
                       pageSize={pageSize} setCurrentPage={setCurrentPage}/>
                    : <span>Footer</span>
            }
        </footer>
    )
}

const mapStateToProps = (state) => ({
    totalElementsCount: state.catalog.totalElementsCount,
    currentPage: state.catalog.currentPage,
    pageSize: state.catalog.pageSize,
    toggleCatalog: state.catalog.toggleCatalog
})

export default connect(mapStateToProps, {setCurrentPage})(FooterContainer)