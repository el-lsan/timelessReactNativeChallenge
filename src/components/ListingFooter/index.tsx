import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import spacing from '../../theme/spacing.ts';
import {getDarkerColor} from '../../utilities';
import colors from '../../theme/colors.ts';

const ListingFooter: React.FC<{asset: any}> = ({asset}) => {
  const darkerBackground = React.useMemo(() => {
    if (asset.heroColour) {
      return getDarkerColor(asset.heroColour);
    }
    return colors.primary500;
  }, [asset.heroColour]);
  return (
    <View style={[styles.container, {backgroundColor: darkerBackground}]}>
      <Text style={styles.label}>{asset.label}</Text>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.priceLabel}>Drop Price</Text>
          <Text style={styles.price}>{asset.actualPrice} €</Text>
        </View>
        <View style={styles.alignEnd}>
          <Text style={styles.priceLabel}>Drop Market Value</Text>
          <Text style={styles.price}>{asset.price} €</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.s,
  },
  priceLabel: {
    fontWeight: '300',
    fontSize: 14,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: spacing.xs,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: '500',
    fontSize: 14,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});

export default ListingFooter;
