import React from 'react'
import {TreeItem, TreeView} from '@mui/lab'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TreeElement from './TreeElement/TreeElement'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    components: {
        MuiTreeItem: {
            styleOverrides: {
                content: {
                    width: '95%',
                    '@media (max-width: 680px)': {
                        width: '90%'
                    },
                },
                label: {
                    fontSize: '20px',
                    '@media (max-width: 880px)': {
                        fontSize: '14px'
                    },
                    '@media (max-width: 680px)': {
                        fontSize: '12px'
                    },
                    '@media (max-width: 540px)': {
                        fontSize: '10px'
                    }
                },

            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: '30px',
                    height: '30px'
                }
            }
        }
    }
})

const CatalogWithTree = ({catalogElements}) => {
    const category = []
    let nodeIdCount = 1

    catalogElements.forEach(e => {
        if (!category.includes(e.category)) {
            category.push(e.category)
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <TreeView
                aria-label="multi-select"
                defaultCollapseIcon={<KeyboardArrowRightIcon/>}
                defaultExpandIcon={<KeyboardArrowDownIcon/>}
                multiSelect
                sx={{height: '100%', width: '100%', marginTop: '50px'}}
            >
                <TreeItem nodeId={'0'} label={'category'}>
                    {
                        category.map(c =>
                            <TreeItem key={nodeIdCount} nodeId={`${nodeIdCount++}`} label={c}>
                                {
                                    catalogElements.filter(e => e.category === c).map(e =>
                                        <TreeElement key={e.id} element={e}/>
                                    )
                                }
                            </TreeItem>
                        )
                    }
                </TreeItem>
            </TreeView>
        </ThemeProvider>
    )
}

export default CatalogWithTree