import { TextControl, Flex, FlexBlock, FlexItem, Button, Icon } from "@wordpress/components";
import "./index.scss";

wp.blocks.registerBlockType("wpchunks/test-block", {
    title: "Test Block",
    icon: "smiley",
    category: "common",
    attributes: {
        skyColor: {
            type: "string",
        },
        grassColor: {
            type: "string",
        },
    },
    edit: function (props) {
        const handleChangeSkyColor = (e) => {
            props.setAttributes({ skyColor: e.target.value });
        };

        const handleChangeGrassColor = (e) => {
            props.setAttributes({ grassColor: e.target.value });
        };

        return (
           <div className="wpchunks-block--test-block">
             <TextControl label="Question:"/>
             <p>Options</p>
             <Flex align="center" justify="space-between">
                <FlexBlock>
                    <TextControl placeholder="Option 1"/>
                </FlexBlock>
                <FlexItem>
                    <Button>
                        <Icon icon="star-empty"/>
                    </Button>                    
                </FlexItem>
                <FlexItem>
                    <Button>
                        Delete
                        <Icon icon="trash" />
                    
                    </Button>
                </FlexItem>
             </Flex>
           </div>
        );
    },

    save: function (props) {
        return null
    }
});
